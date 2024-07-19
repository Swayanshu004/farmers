import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newcrops from './components/Newcrops'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Home />
    <Newcrops />
    <News />
    <Footer /> 
    </>
  )
}

export default App
