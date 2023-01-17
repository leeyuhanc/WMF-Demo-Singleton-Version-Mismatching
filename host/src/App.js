import React from "react"
import { Info } from "./Info"
const MfeRemote = React.lazy(() => import("remote/App"))
import faker from "faker"
const App = () => {
  return (
    <React.Suspense fallback={<h1>loading</h1>}>
      <div style={{ display: "flex", flexDirection: "row" }}>
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
          <MfeRemote />
        </div>
        <Info />
      </div>
    </React.Suspense>
  )
}

export { App }
