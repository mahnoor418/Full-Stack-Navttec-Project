import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './components/header/header.css'
import './components/sidebar/sidebar.css'
import './App.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Home from './components/home/home'
import Books from './components/books/books'
import Booklist from './components/booklist/booklist'
import Customers from './components/customers/customers'
import Orders from './components/order/order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reviews from './components/reviews/reviews'

function App() {
  const url = "http://localhost:5000";
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Router>
      <div className='grid-container'>
      <ToastContainer/>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
       
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/booklist" element={<Booklist />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/order" element={<Orders />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
       
      </div>
    </Router>
  )
}

export default App
