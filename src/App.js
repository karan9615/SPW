import React from 'react'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {
    return (
        <div>
        <Header/>  
        <Navbar/>
        <Home /> 
        <Body />   
        <Footer />      
        </div>
    )
}

export default App
