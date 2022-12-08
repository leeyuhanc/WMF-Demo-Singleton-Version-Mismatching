import React from "react"
const Info = () => (
  <div style={{ marginLeft: "20px", display: "flex", flexDirection: "column" }}>
    <div
      style={{
        backgroundColor: "linen",
        width: "100px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Host
    </div>
    <div
      style={{
        backgroundColor: "pink",
        width: "100px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Remote
    </div>
  </div>
)

export { Info }
