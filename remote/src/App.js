import React from "react"

import { useState } from "react"
const App = () => {
  const [word, setWord] = useState("hello")
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
      <button onClick={() => setWord("bye")}>{word}</button>
    </div>
  )
}

export default App
