// src/components/NavBar.jsx
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
//import { toast } from 'react-toastify'; // Uncomment if using toast

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
       //toast.success("Logged out successfully"); // Optional
    } catch (err) {
      console.error('Logout error:', err.message);
      //toast.error("Logout failed. Please try again."); // Optional
    }
  };

  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-400 underline' : 'hover:text-blue-300 transition';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white backdrop-blur-sm" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/userdashboard">
          <h1 className="text-2xl font-bold text-blue-400">Refixly</h1>
        </NavLink>

        <ul className="flex space-x-6 text-sm md:text-base font-medium items-center">
          <li>
            <NavLink to="/userdashboard" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload" className={linkClass}>
              Tutorial
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className={linkClass}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              aria-label="Logout"
              data-testid="logout-button"
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
