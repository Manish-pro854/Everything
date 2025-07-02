import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Stores from './Components/Pages/Stores'
import Events from './Components/Pages/Events'
import Offers from './Components/Pages/Offers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Food from './Components/Pages/Food'
import Entertainment from './Components/Pages/Entertainment'
import Businees from './Components/Pages/Businees'
import Clock from './Components/Pages/Clock'
import Location from './Components/Pages/Location'
import Cart from './Components/Pages/Cart'
import Home from './Components/Pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/stores' element={<Stores/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/rent' element={<Businees/>}/>
        <Route path='/clock' element={<Clock/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App