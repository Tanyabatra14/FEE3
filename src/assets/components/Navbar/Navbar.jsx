import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
       <div className="toolbar">
          <div className="l-constrained-6 group">
            <img className="vector-smart-object-double-click-to-edit" src="images/vector_smart_object_doubl_2.png" alt="" width="75" height="56"/>
            <div className="menu-items group">
              <p className="happiness">Happiness</p>
              <p className="books">Books</p>
              <p className="text">About Us</p>
              <p className="contact">Contact</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Navbar
