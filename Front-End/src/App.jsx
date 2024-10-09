import React from 'react';
import { Routes ,Route, } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Brands from './components/Brands';
import BestSeller from './components/BestSeller';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Blog from './Pages/Blog';
import Navbar from './components/Navbar'
import Products from './components/Products';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Checkout from './Pages/Checkout';
import FeaturedAuthor from './components/FeaturedAuthoer';
import AProductDetail from './components/FeaturedAuthorDetail';
import DailyDeals from './components/DailyDeals';
import DProductDetail from './components/DailyDealsDetail';
import Login from './components/login'
import SingingUp from './components/SingingUp';
import AddtoCart from './components/AddtoCart';
import BlogDetail from './Pages/BlogDetail';
import Wishlist from './components/Wishlist';
import ProductReview from './Pages/Reviews'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar /> 
      <div className='grid-container'>
      <ToastContainer/>
      <Routes>    
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/review" element={<ProductReview/>}/>
        <Route path="/Brands" element={<Brands />} />
        <Route path="/BestSeller" element={<BestSeller />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/FeaturedAuthor" element={<FeaturedAuthor />} />
        <Route path="/productsdata/:id" element={<AProductDetail />} />
        <Route path="/DailyDeals" element={<DailyDeals />} />
        <Route path="/dailydeals/:id" element={<DProductDetail />} />
        <Route path="/AddtoCart" element={<AddtoCart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/SingingUp" element={<SingingUp />} />
        <Route path='/login' element={<Login />} />

      </Routes>
   
      <Footer />
      </div>
    </>
  );
}

export default App;