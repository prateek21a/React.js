import React from 'react'
import Header from './src/Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from './src/Components/Footer/Footer'

function Layout() {
  return (
    <>
<Header/>
<Outlet/> 
<Footer/>    
    </>
  )
}

export default Layout
