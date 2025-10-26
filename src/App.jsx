import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div id="margin-container">
        <h2>Gutted</h2>
      </div>
    </div>
  )
}

export default App
