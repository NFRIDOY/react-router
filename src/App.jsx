import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-500 text-white'>Its Home</h1>

      <Header></Header>
      
      <Outlet></Outlet>

      <Footer></Footer>
    </>
  )
}

export default App
