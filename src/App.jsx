// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Body from "./react-components/body"
import Login from "../src/react-components/login"




function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

