import React, { useState } from 'react'
import ColorBlock from './ColorBlock.js'
import ColorForm from './ColorForm.js'

function App() {
  let colors = [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} key={i} />
    )
  })
  return (
    <div className="App">{colorMap}</div>
  )
}

export default App;