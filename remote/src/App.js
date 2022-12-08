import React, { useState } from "react"

import faker from "faker"

const App = () => {
  // console.log("in remote react version", React.version)
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "200px",
        height: "200px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      {/* {text} */}
      {/* {React.version} */}
      {faker.commerce.productName()}
    </div>
  )
}

export default App
