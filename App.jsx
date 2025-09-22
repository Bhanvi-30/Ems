import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import AddUser from './Components/AddUser'
import AllUser from './Components/AllUser'
import ContactUs from './Components/ContactUs'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Edit from './Components/Edit'
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header></Header>
       <Routes>
        <Route path='/'element ={<Home></Home>}></Route>
        <Route path='/about'element ={<About></About>}></Route>
        <Route path='/addUser'element ={<AddUser></AddUser>}></Route>
        <Route path='/allUser'element ={<AllUser></AllUser>}></Route>
        <Route path='/contactUS'element ={<ContactUs></ContactUs>}></Route>
        <Route path='/login'element ={<Login></Login>}></Route>
        <Route path='/signup'element ={<Signup></Signup>}></Route>
        <Route path='/edit/:index'element ={<Edit></Edit>}></Route>
       </Routes>
       <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
