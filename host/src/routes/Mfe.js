import React from "react"
import { Info } from "../Info"

const MfeRemote = React.lazy(() => import("remote/App"))

const Mfe = () => {
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
          <MfeRemote />
        </div>
        <Info />
      </div>
    </React.Suspense>
  )
}

export { Mfe }
