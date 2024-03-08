import react from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';



function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Header  /> <Home /></>} />
          <Route path="/login" element={<Login  />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/Products" element={<><Header  /><ProductsPage/></>} />
          <Route path="*" element={<h2> Page Not Found </h2>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
