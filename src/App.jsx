import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import HouseProduct from './components/HouseProduct'
import ListGenre from './components/ListGenre'


function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Header/>
        <Slider/>
        <HouseProduct/>
        <ListGenre/>
      </div>
  )
}

export default App
