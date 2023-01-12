import React, { useState } from "react"

const App = () => {
  const [text, setText] = useState("hello world")
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
      <button onClick={() => setText("goodbye world")}>{text}</button>
    </div>
  )
}

export default App
