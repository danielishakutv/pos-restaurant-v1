import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Simplicity',
    desc: 'We strip away complexity so you can focus on your food and customers.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Reliability',
    desc: 'Offline-first and battle-tested for real-world conditions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
    title: 'Local First',
    desc: 'Built in Africa, for Africa — we understand your market.',
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="section about-hero">
        <div className="container text-center">
          <span className="badge">About Us</span>
          <h1 className="about-hero__title">
            Empowering restaurants with technology that works
          </h1>
          <p className="about-hero__subtitle">
            We are building tools to simplify how restaurants operate and grow.
            Our mission is to empower food businesses with technology that is
            simple, reliable, and built for their reality.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container about-story">
          <div className="about-story__text">
            <h2>Our Story</h2>
            <p>
              We started with a simple observation: most restaurant technology
              was built for large chains in developed markets. Small and
              mid-size restaurants in Africa were left to cobble together
              fragmented tools — or use none at all.
            </p>
            <p>
              POS Pay was born to change that. We built a unified platform —
              POS, payments, and analytics — designed from day one for the
              realities of running a restaurant in Africa: unreliable
              internet, diverse payment methods, and the need for simplicity.
            </p>
          </div>
          <div className="about-story__visual">
            <div className="about-illustration">
              <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="200" rx="16" fill="#dbeafe" />
                <rect x="40" y="40" width="140" height="120" rx="8" fill="#fff" />
                <rect x="220" y="40" width="140" height="120" rx="8" fill="#fff" />
                <rect x="56" y="60" width="60" height="8" rx="4" fill="#2563eb" />
                <rect x="56" y="80" width="100" height="6" rx="3" fill="#e2e8f0" />
                <rect x="56" y="96" width="80" height="6" rx="3" fill="#e2e8f0" />
                <rect x="56" y="120" width="50" height="24" rx="6" fill="#2563eb" />
                <rect x="236" y="60" width="60" height="8" rx="4" fill="#10b981" />
                <rect x="236" y="80" width="100" height="6" rx="3" fill="#e2e8f0" />
                <rect x="236" y="96" width="80" height="6" rx="3" fill="#e2e8f0" />
                <rect x="236" y="120" width="50" height="24" rx="6" fill="#10b981" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Our Values</h2>
            <p>The principles that guide everything we build.</p>
          </div>
          <div className="grid grid--3">
            {values.map((v) => (
              <div key={v.title} className="card about-value-card">
                <div className="about-value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-section__title">Join us on this journey</h2>
          <p className="cta-section__subtitle">
            We're just getting started. Be part of the restaurants transforming
            how they operate.
          </p>
          <div className="cta-section__actions">
            <Link to="/waitlist" className="btn btn--white btn--large">
              Get Started
            </Link>
            <Link to="/contact" className="btn btn--outline btn--large cta-section__outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
