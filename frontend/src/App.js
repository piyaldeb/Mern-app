import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contactUs'
import Login from './components/Login'
import Register from './components/Register'
import Error from './components/error'


import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    
    <>
      <Navbar />
      <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<Home/>}/>
        <Route  path='/error' element={<Error/>}/>
        <Route  path='/error' element={<About/>}/>

        <Route  path='/error' element={<Contact/>}/>

        <Route  path='/login' element={<Login/>}/>
        <Route  path='/Register' element={<Register/>}/>

        

      </Routes>
      </BrowserRouter>


    </>


  )
}

export default App