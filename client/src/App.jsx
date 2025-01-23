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
import Loader from "./components/Loader";

import { useSelector } from "react-redux"

function App() {
const {loader}=useSelector(state=>state.loaderReducer)

  return (
    <>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
       {loader&& <Loader/>}
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
