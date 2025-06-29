// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./react-components/body";
import Login from "../src/react-components/login";
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./react-components/feed";
import Profile from "./react-components/profile";
import EditProfile from "./react-components/editProfile";




function App() {

  return (
    <>
    <Provider store={appStore}>
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="feed" element={<Feed />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>
</Provider>

    </>
  )
}

export default App

