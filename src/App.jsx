import Home from './components/Home'
import Navbar from './components/Navbar'
import Newcrops from './components/Newcrops'
import News from './components/News'
import Footer from './components/Footer'

function App() {

  return (
    <div className='w-screen relative'>
      <div className='fixed top-0 w-screen'>
        <Navbar />  
      </div>
    <Home />
    <Newcrops />
    <News />
    <Footer /> 
    </div>
  )
}

export default App
