import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Home /><Footer/></>} />
        <Route path="/category/:category" element={<><Navbar/><CategoryPage/><Footer/></>} />
        <Route path="/category/:category/:id" element={<><Navbar/><ProductPage/><Footer/></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
