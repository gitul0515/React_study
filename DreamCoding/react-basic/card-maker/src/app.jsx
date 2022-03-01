import './app.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/main/main';
import Login from './components/login/login';

function App({authService}) {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login authService={authService} />} />
        <Route path='/main' element={<Main authService={authService} />} />
      </Routes>
    </Router>
  )
}

export default App;
