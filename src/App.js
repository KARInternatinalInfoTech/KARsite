import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Products from './Components/Products';
import ContactUs from './Components/ContactUs';
import Career from './Components/Career';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>      
    </div>
  );
}

export default App;
