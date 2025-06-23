// import { useState } from 'react'
import NavBar from "./components/navBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
        <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  )
}

export default App

