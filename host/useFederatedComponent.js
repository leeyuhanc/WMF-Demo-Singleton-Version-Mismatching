import React, { useState, useEffect } from "react"

const componentCache = new Map()
const urlCache = new Set()

export const useFederatedComponent = (remoteUrl, scope, module) => {
  const key = `${remoteUrl}-${scope}-${module}`
  const [Component, setComponent] = useState(null)

  const { ready, errorLoading } = useDynamicScript(remoteUrl)

  useEffect(() => {
    if (Component) setComponent(null)
    // Only recalculate when key changes
  }, [key])

  useEffect(() => {
    if (ready && !Component) {
      const Comp = React.lazy(loadComponent(scope, module))
      componentCache.set(key, Comp)
      setComponent(Comp)
    }
    // key includes all dependencies (scope/module)
  }, [Component, ready, key])

  return { errorLoading, Component }
}

const useDynamicScript = (url) => {
  const [ready, setReady] = useState(false)
  const [errorLoading, setErrorLoading] = useState(false)

  useEffect(() => {
    if (!url) return

    if (urlCache.has(url)) {
      setReady(true)
      setErrorLoading(false)
      return
    }

    setReady(false)
    setErrorLoading(false)

    const element = document.createElement("script")

    element.src = url
    element.type = "text/javascript"
    element.async = true

    element.onload = () => {
      urlCache.add(url)
      setReady(true)
    }

    element.onerror = () => {
      setReady(false)
      setErrorLoading(true)
    }

    document.head.appendChild(element)

    return () => {
      urlCache.delete(url)
      document.head.removeChild(element)
    }
  }, [url])

  return {
    errorLoading,
    ready,
  }
}

const loadComponent = (scope, module) => async () => {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default")
  const container = window[scope] // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default)
  const factory = await window[scope].get(module)
  const Module = factory()
  return Module
}
