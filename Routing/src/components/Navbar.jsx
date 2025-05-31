import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        
            <Link  to ="/" className="element">Home</Link>
            <Link  to ="/about" className="element">About</Link>
            <Link  to ="/contact" className="element">ContactUs</Link>
            <Link  to ="/service" className="element">Service</Link>
            <Link to="/todo" className="element">Todo</Link>
            
        
    </nav>
    
  )
}
export default Navbar