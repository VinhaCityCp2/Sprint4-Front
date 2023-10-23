import { } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

export default function App() {
  

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}


