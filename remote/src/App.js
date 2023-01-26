import React from "react"

const App = () => {
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
      {React.version}
    </div>
  )
}

export default App
