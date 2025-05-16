import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css'; 

function Navbar () {
   // State to track if mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
        {/* Logo section with image and site name */}
      <div className="logo">
         <img src="/logo.jpg" alt="Library Logo" className="logo-img"  width={50} height={40}/>
        <span> Online Library</span>
      </div>
        {/* Hamburger button toggles mobile menu open/close */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {/* Navigation links container, toggles "open" class based on state */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* Each link closes the menu on click */}
        <li><Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/books" className="nav-link" onClick={() => setIsOpen(false)}>Browse Books</Link></li>
        <li><Link to="/add-book" className="nav-link" onClick={() => setIsOpen(false)}>Add Book</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
