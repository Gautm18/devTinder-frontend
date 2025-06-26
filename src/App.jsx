// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./react-components/body";
import Login from "../src/react-components/login";
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./react-components/feed";




function App() {

  return (
    <>
    <Provider store={appStore}>
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
</Provider>

    </>
  )
}

export default App

