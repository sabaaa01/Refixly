import React from 'react';
import Navbar from '../components/NavBar';

const Contact = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700">
          We'd love to hear from you! Whether you have questions, feedback, or need support, reach out to us and we'll get back to you as soon as possible.
        </p>
      </section>
    </div>
  );
};

export default Contact;
