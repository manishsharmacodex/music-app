import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {

  const logo = "GenZ-Music";

  return (
    <div className='p-3 bg-gray-950 h-screen'>
      <Navbar logo={logo} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
