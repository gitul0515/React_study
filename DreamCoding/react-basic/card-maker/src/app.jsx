import './app.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/main/main';
import Login from './components/login/login';

function App({authService}) {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (state) => {
    setIsLogged(state);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login authService={authService} handleLogin={handleLogin}/>} />
        <Route path='/main' element={<Main authService={authService} isLogged={isLogged}/>} />
      </Routes>
    </Router>
  )
}

export default App;
