import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Stores from './Components/Pages/Stores'
import Events from './Components/Pages/Events'
import Offers from './Components/Pages/Offers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Food from './Components/Pages/Food'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/stores' element={<Stores/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/food' element={<Food/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
