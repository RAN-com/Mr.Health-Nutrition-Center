import React from 'react'
import Header from  '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../Routers/Routers'

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers className='bg-yellow-400'/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout