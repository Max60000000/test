import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    
    <Header/>
    <div className='flex items-center'>

</div>
    <Outlet/>
    <Footer />
    </>
  )
}

export default App
