import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import Navigation from './views/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './views/Header'
import FullPage from './views/FullPage'
import Slider from './views/Slider'


function App() {

  return (
    <>
     <Header/>
     <Navigation/>
     <Slider/>
     <FullPage/>
    </>
  )
}

export default App
