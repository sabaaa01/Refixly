// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import header from "../assets/header.jpg"; // Make sure this image exists

const UserHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false, mirror: true });
  }, []);

  const features = [
    { icon: '🧠', title: 'AI Damage Detection', desc: 'Instant device analysis using AI.' },
    { icon: '📺', title: 'Video Tutorials', desc: 'Step-by-step guidance tailored to you.' },
    { icon: '🔧', title: 'AR Repair Assistant', desc: 'Overlay repair instructions using AR.' },
    { icon: '📈', title: 'Progress Tracking', desc: 'Monitor your DIY repair journey.' },
    { icon: '💡', title: 'Expert Tips', desc: 'Tips from tech repair experts & the community.' },
    { icon: '📱', title: 'Mobile Friendly', desc: 'Repair anytime from any device.' },
  ];

  const steps = [
    { icon: '📷', title: 'Scan Object', desc: 'Use your camera to detect issues instantly.' },
    { icon: '📖', title: 'Get Tutorials', desc: 'Receive clear, relevant repair guides.' },
    { icon: '🛠️', title: 'Repair with AR', desc: 'Follow real-time AR instructions.' },
    { icon: '✅', title: 'Verify & Complete', desc: 'Mark your fix and save for reference.' },
  ];

  const faqs = [
    { q: 'Is Refixly free to use?', a: 'Basic features are free. Premium features require a subscription.' },
    { q: 'What devices are supported?', a: 'Smartphones, tablets, laptops, and small appliances.' },
    { q: 'Do I need any tools?', a: 'No. A camera and internet connection are enough.' },
    { q: 'Can I upload my own tutorials?', a: 'Yes! Share your knowledge with the community.' },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative text-white"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${header})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/70"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Own and Repair Smart
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Refixly is your AI-powered DIY assistant. Scan, Learn, and Repair—all from your pocket.
          </p>
          <button className="bg-blue-400 hover:bg-blue-300 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold mb-14 text-blue-900" data-aos="fade-right">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 border border-blue-300 rounded-2xl hover:shadow-xl transition-transform transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="text-6xl mb-5">{f.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section id="tutorial" className="bg-blue-50 py-20 px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-blue-900" data-aos="fade-left">
          How It Works
        </h2>
        <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="text-7xl mb-6">{s.icon}</div>
              <h4 className="text-2xl font-semibold mb-3 text-blue-700">{s.title}</h4>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center" data-aos="zoom-in">
        <h2 className="text-4xl font-bold mb-8">About Refixly</h2>
        <p className="max-w-4xl mx-auto text-lg">
          Refixly empowers everyday users with the tools and guidance to fix their own devices—no
          technician needed. Our blend of AI, AR, and community knowledge makes repair smart, simple, and sustainable.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center text-blue-900" data-aos="fade-left">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="border border-blue-300 rounded-lg p-5 cursor-pointer hover:bg-blue-50"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <summary className="text-lg font-semibold text-blue-700">{faq.q}</summary>
              <p className="mt-3 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4">Ready to start fixing smarter?</h3>
        <p className="mb-8 max-w-xl mx-auto">
          Join thousands of users who trust Refixly to guide their DIY repair journeys.
        </p>
        <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-6 text-center text-sm border-t border-blue-200">
        <p>&copy; {new Date().getFullYear()} Refixly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserHome;
