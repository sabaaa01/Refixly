// src/components/NavBar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err.message);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/userdashboard"><h1 className="text-2xl font-bold text-blue-400">Refixly</h1></Link>
        <ul className="flex space-x-6 text-sm md:text-base font-medium items-center">
          <li><Link to="/userdashboard" className="hover:text-blue-300 transition">Home</Link></li>
          <li><Link to="/upload" className="hover:text-blue-300 transition">Tutorial</Link></li>
          <li><Link to="/community" className="hover:text-blue-300 transition">Community</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
          <li>
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
