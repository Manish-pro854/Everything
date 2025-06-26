import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Stores from './Components/Pages/Stores'
import Events from './Components/Pages/Events'
import Offers from './Components/Pages/Offers'

const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Events/> */}
    <Offers/>
    <Footer/>
    </>
  )
}

export default App
