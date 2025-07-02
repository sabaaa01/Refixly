import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Add glow CSS via Tailwind's global CSS or inline style tag
// Or you can put this in your index.css or App.css:
//
// .faq-glow {
//   box-shadow: 0 0 12px 3px #38BDF8;
//   transition: box-shadow 0.3s ease-in-out;
// }

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map(({ q, a }, i) => (
        <div
          key={i}
          className={`bg-[#334155] rounded-2xl shadow-lg cursor-pointer select-none ${
            openIndex === i ? 'faq-glow' : ''
          }`}
          onClick={() => toggle(i)}
          aria-expanded={openIndex === i}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggle(i);
          }}
        >
          <div className="flex justify-between items-center p-6">
            <h3 className="text-xl font-semibold">{q}</h3>
            <span className="text-[#38BDF8] text-2xl">{openIndex === i ? '−' : '+'}</span>
          </div>
          {openIndex === i && (
            <p className="px-6 pb-6 text-[#CBD5E1] border-t border-[#38BDF8]">{a}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,  // Animate each time it enters viewport
      mirror: true, // Animate on scroll up and down
    });
  }, []);

  const features = [
    {
      title: 'Real-time Object Detection',
      desc: 'Scan broken items using your webcam and let AI identify the issue.',
    },
    {
      title: 'Repair Tutorials',
      desc: 'Get video guides and repair steps curated for your object.',
    },
    {
      title: 'AR Repair Assistant (Coming Soon)',
      desc: 'Visualize step-by-step repairs with Augmented Reality overlays.',
    },
  ];

  const faqs = [
    {
      q: 'Is Refixly free to use?',
      a: 'Yes, the basic features are free. We plan to add premium features soon.',
    },
    {
      q: 'Which devices are supported?',
      a: 'Refixly works on any device with a webcam or camera, including desktops, laptops, tablets, and smartphones.',
    },
    {
      q: 'Can I request tutorials for specific devices?',
      a: 'Absolutely! You can submit requests, and our team curates new content regularly.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#334155] text-white font-sans">
      {/* Global glow CSS */}
      <style>{`
        .faq-glow {
          box-shadow: 0 0 12px 3px #38BDF8;
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>

      {/* Header */}
      <header className="max-w-7xl mx-auto flex justify-between items-center py-8 px-6 md:px-20" data-aos="fade-down">
        <h1 className="text-3xl font-extrabold text-[#38BDF8] cursor-default">Refixly</h1>
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li><a href="#how-it-works" className="hover:text-[#0EA5E9] transition">How It Works</a></li>
            <li><a href="#features" className="hover:text-[#0EA5E9] transition">What Refixly Can Do</a></li>
            <li><a href="#faq" className="hover:text-[#0EA5E9] transition">FAQ</a></li>
            <li><a href="#ready" className="hover:text-[#0EA5E9] transition">Ready to Fix?</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-28" data-aos="fade-up">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
              Welcome to <span className="text-[#38BDF8]">Refixly</span>
            </h1>
            <p className="mt-6 text-[#94A3B8] text-lg md:text-xl leading-relaxed">
              Your AI-powered DIY repair assistant. Detect. Learn. Repair.
            </p>
            <Link
              to="/login"
              className="inline-block mt-10 px-8 py-4 bg-[#38BDF8] text-black font-semibold rounded-3xl shadow-lg hover:bg-[#0EA5E9] transition duration-300 ease-in-out"
            >
              Get Started
            </Link>
          </div>

          <div className="flex-1 flex justify-center" data-aos="fade-left" data-aos-delay="300">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055672.png"
              alt="Repair illustration"
              className="w-80 md:w-[30rem] drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 md:px-20 py-20" data-aos="fade-right">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#38BDF8]">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center text-[#CBD5E1]">
          <div className="bg-[#334155] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="text-6xl mb-4">🎥</div>
            <h3 className="text-2xl font-semibold mb-2">Scan</h3>
            <p>Use your webcam to scan the broken item for AI diagnosis.</p>
          </div>
          <div className="bg-[#334155] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold mb-2">Learn</h3>
            <p>Access curated tutorials and step-by-step repair guides.</p>
          </div>
          <div className="bg-[#334155] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">
            <div className="text-6xl mb-4">🛠️</div>
            <h3 className="text-2xl font-semibold mb-2">Repair</h3>
            <p>Follow the guides to fix your item with confidence.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 md:px-20 py-20" data-aos="fade-left">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#38BDF8]">What Refixly Can Do</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map(({ title, desc }, i) => (
            <div
              key={i}
              className="bg-[#334155] rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 cursor-default"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#38BDF8]">{title}</h3>
              <p className="text-[#CBD5E1]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-6 md:px-20 py-20" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#38BDF8]">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      {/* Ready to Fix CTA */}
      <section
        id="ready"
        className="bg-[#0F172A] py-20 text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-bold mb-6 text-[#38BDF8]">
          Ready to Fix it Yourself?
        </h2>
        <p className="text-[#94A3B8] max-w-xl mx-auto mb-8">
          Join thousands of users who are repairing with confidence using Refixly.
        </p>
        <Link
          to="/login"
          className="inline-block px-14 py-4 bg-[#38BDF8] text-black font-semibold rounded-3xl shadow-lg hover:bg-[#0EA5E9] transition"
        >
          Get Started Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E293B] py-8 text-center text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>&copy; 2025 Refixly. All rights reserved.</p>
          <div className="flex space-x-6 text-[#94A3B8]">
            {/* Social icons with hover */}
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.36a9.07 9.07 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.1 0c-2.5 0-4.52 2-4.52 4.5 0 .35.04.7.1 1.03A12.78 12.78 0 0 1 1.67 1.15 4.47 4.47 0 0 0 3 6a4.48 4.48 0 0 1-2-.56v.05a4.52 4.52 0 0 0 3.6 4.44 4.49 4.49 0 0 1-2 .08 4.52 4.52 0 0 0 4.2 3.12 9 9 0 0 1-5.58 1.93A8.95 8.95 0 0 1 0 18.57a12.7 12.7 0 0 0 6.89 2 12.68 12.68 0 0 0 12.77-13v-.59A9 9 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.87v-7H8v-3h2.5v-2c0-2.47 1.49-3.82 3.78-3.82 1.09 0 2.23.2 2.23.2v2.47H15c-1.3 0-1.7.82-1.7 1.66v2h2.9l-.46 3h-2.44v7A10 10 0 0 0 22 12" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] transition"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.75v2.25h.07c.66-1.25 2.3-2.55 4.73-2.55 5.06 0 6 3.33 6 7.66V24H17v-7.5c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.95-2.88 3.96V24H7.5V8z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
