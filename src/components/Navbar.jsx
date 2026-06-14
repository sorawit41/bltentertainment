import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Show navbar if scrolling up, near top of the page, or if mobile drawer is open
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 80 || isOpen;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, isOpen]);

  const navLinks = [
    { name: 'หน้าแรก', path: '/' },
    { name: 'ไอดอล', path: '/idols' },
    { name: 'วีเจ TikTok', path: '/vj' },
    { name: 'ร้านอาหาร', path: '/#restaurant' },

    { name: 'ร้านค้าออนไลน์', path: '/shop' },
  ];

  return (
    <nav className={`navbar ${visible ? '' : 'navbar-hidden'}`}>
      <div className="navbar-container container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src={logoImg} alt="BLT WORLD ENTERTAINMENT" className="nav-logo-img" />
        </Link>

        {/* Mobile menu toggle */}
        <div className="mobile-toggle-wrapper">
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path || (link.path === '/#restaurant' && location.hash === '#restaurant') ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
