import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
