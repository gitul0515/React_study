import React from "react";
import Nav from "./Nav";
import About from "./About";
import Info from "./Info";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App2 = () => {
  return (
    <div className="App2">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App2;
