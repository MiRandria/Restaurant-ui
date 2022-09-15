import './App.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Order } from './pages/Order/Order';


function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/order" element={<Order/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
