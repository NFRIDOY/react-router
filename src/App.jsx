// import { useState } from 'react'
import './App.css'
// import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Outlet, useNavigation } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)
  const navigation = useNavigation();

  return (
    <div className='h-screen'>
      <h1 className='bg-gray-900 text-white font-black text-9xl'>It is <span className='text-red-600'>Re</span>active!!!</h1>

      <Header></Header>

      {
          navigation.state === "loading" ? <span className="loading loading-spinner loading-lg relative left-1/2"></span> : <Outlet></Outlet>
      }

      

      <Footer></Footer>
    </div>
  )
}

export default App
