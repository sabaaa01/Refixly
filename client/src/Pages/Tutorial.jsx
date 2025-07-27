import React from 'react';
import Navbar from '../components/NavBar';

const Tutorial = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow flex items-center justify-center px-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-700">
          Coming Soon
        </h1>
      </section>
    </div>
  );
};

export default Tutorial;
