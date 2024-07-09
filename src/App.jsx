import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import Footer from './components/Footer';
import Home from './pages/Home/Home';
// import Services from './pages/Services';
import './App.css';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services.jsx';
import Products from './components/Products/Products.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx'
function App() {
 return (
<div className="app-container">
<Header />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/services" element={<Services/>} />
<Route path="/products" element={<Products/>} />
<Route path="/aboutus" element={<AboutUs/>} />
</Routes>
<Footer/>
</div>
 );
}
export default App;