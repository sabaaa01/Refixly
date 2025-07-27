import React from 'react';
import Navbar from '../components/NavBar';

const Community = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">Community</h1>
        <p className="text-lg text-gray-700">
          Join our vibrant community of tinkerers, technicians, and learners. Share your repair tips, ask questions, and connect with others who are passionate about DIY repairs.
        </p>
      </section>
    </div>
  );
};

export default Community;
