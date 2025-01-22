// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Home from "./pages/home"
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from "./components/ProtectedRoute";


function App() {


  return (
    <>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>

      </div>

    </>
  )
}

export default App
