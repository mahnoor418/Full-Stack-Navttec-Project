import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> Book-Store
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
     <NavLink to="/home" className="sidebar-option">
     <BsGrid1X2Fill className='icon' /> Dashboard
      </NavLink>
      </li>
      <li className='sidebar-list-item'>
      <NavLink to="/books" className="sidebar-option">
      <BsFillArchiveFill className='icon' /> Books
      </NavLink>
      </li>
      <li className='sidebar-list-item'>
      <NavLink to="/booklist" className="sidebar-option">
      <BsFillGrid3X3GapFill className='icon' /> Books-List
      </NavLink>
      </li>
      <li className='sidebar-list-item'>
      <NavLink to="/customers" className="sidebar-option">
      <BsFillGrid3X3GapFill className='icon' /> Customer
      </NavLink>
      </li>
      <li className='sidebar-list-item'>
      <NavLink to="/order" className="sidebar-option">
      <BsFillGrid3X3GapFill className='icon' /> Order-List
      </NavLink>
      </li>
      <li className='sidebar-list-item'>
      <NavLink to="/reviews" className="sidebar-option">
      <BsGrid1X2Fill  className='icon' /> Reviews-List
      </NavLink>
      </li>
      </ul> 
    </aside>
  )
}

export default Sidebar
