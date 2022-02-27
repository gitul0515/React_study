import './app.css';
import Login from './components/login/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/main/main';

function App({authService}) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login authService={authService}/>} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </Router>
  )
}

export default App;
