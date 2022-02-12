import React from "react";
import Nav from "./Nav";
import Login from "./login";
import Logout from "./logout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App2 = () => {
  return (
    <div className="App2">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/home" element={<Login />} />
          <Route path="/login" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App2;
