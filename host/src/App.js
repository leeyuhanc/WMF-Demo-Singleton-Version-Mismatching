import React from "react"
import { Info } from "./Info"
const MfeRemote = React.lazy(() => import("remote/App"))

const App = () => {
  return (
    <React.Suspense fallback={<h1>loading</h1>}>
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
        <MfeRemote />
      </div>
      <Info />
    </React.Suspense>
  )
}

export { App }
