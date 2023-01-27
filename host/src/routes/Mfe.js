import React from "react"
import { Info } from "../Info"

import { useFederatedComponent } from "../../useFederatedComponent"

const Mfe = () => {
  const { Component: MfeRemote, errorLoading } = useFederatedComponent(
    "http://localhost:8081/remoteEntry.js",
    "remote",
    "./App"
  )

  return (
    <React.Suspense fallback={<h1>loading</h1>}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "linen",
            width: "800px",
            height: "800px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {React.version}
          {errorLoading
            ? "error loading the microfrontend "
            : MfeRemote && <MfeRemote />}
        </div>
        <Info />
      </div>
    </React.Suspense>
  )
}

export { Mfe }
