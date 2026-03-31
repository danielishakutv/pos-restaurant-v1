import { Link } from 'react-router-dom';
import './Product.css';

const sections = [
  {
    id: 'pos',
    badge: 'POS System',
    title: 'Take orders and manage your floor effortlessly',
    desc: 'Our POS system allows your staff to take orders quickly, manage tables, and process transactions without delays. Designed for speed even in the busiest hours.',
    color: '#2563eb',
    bg: '#dbeafe',
    mockup: (
      <div className="product-mockup product-mockup--pos">
        <div className="pm__header"><div className="pm__pill" /><div className="pm__pill pm__pill--short" /></div>
        <div className="pm__grid3">
          <div className="pm__tile" /><div className="pm__tile" /><div className="pm__tile" />
          <div className="pm__tile" /><div className="pm__tile" /><div className="pm__tile" />
        </div>
        <div className="pm__bar" />
      </div>
    ),
  },
  {
    id: 'payments',
    badge: 'Payments',
    title: 'Accept every payment method your customers use',
    desc: 'Accept multiple payment methods with a secure and reliable system designed for speed and ease. Cards, bank transfers, QR codes — all in one place.',
    color: '#10b981',
    bg: '#d1fae5',
    mockup: (
      <div className="product-mockup product-mockup--pay">
        <div className="pm__header"><div className="pm__pill" /></div>
        <div className="pm__pay-methods">
          <div className="pm__method">Card</div>
          <div className="pm__method">Transfer</div>
          <div className="pm__method">QR</div>
        </div>
        <div className="pm__bar pm__bar--green" />
      </div>
    ),
  },
  {
    id: 'dashboard',
    badge: 'Dashboard & Analytics',
    title: 'Know your numbers, make smarter decisions',
    desc: 'Get real-time insights into your business performance and make smarter decisions. Track daily sales, popular items, and staff performance at a glance.',
    color: '#f59e0b',
    bg: '#fef3c7',
    mockup: (
      <div className="product-mockup product-mockup--dash">
        <div className="pm__header"><div className="pm__pill" /></div>
        <div className="pm__chart-bars">
          <div className="pm__cbar" style={{ height: '40%' }} />
          <div className="pm__cbar" style={{ height: '70%' }} />
          <div className="pm__cbar" style={{ height: '55%' }} />
          <div className="pm__cbar" style={{ height: '90%' }} />
          <div className="pm__cbar" style={{ height: '65%' }} />
          <div className="pm__cbar" style={{ height: '80%' }} />
        </div>
      </div>
    ),
  },
  {
    id: 'offline',
    badge: 'Offline Mode',
    title: 'No internet? No problem.',
    desc: 'Continue operating even without internet. Everything syncs automatically when you\'re back online. Never lose a sale because of connectivity.',
    color: '#6366f1',
    bg: '#e0e7ff',
    mockup: (
      <div className="product-mockup product-mockup--offline">
        <div className="pm__header"><div className="pm__pill" /></div>
        <div className="pm__offline-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0114.08 0" />
            <path d="M1.42 9a16 16 0 0121.16 0" />
            <path d="M8.53 16.11a6 6 0 016.95 0" />
            <circle cx="12" cy="20" r="1" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        </div>
        <p className="pm__offline-label">Syncs when reconnected</p>
      </div>
    ),
  },
];

export default function Product() {
  return (
    <main className="product-page">
      {/* Hero */}
      <section className="section product-hero">
        <div className="container text-center">
          <span className="badge">Product</span>
          <h1 className="product-hero__title">
            A powerful yet simple platform to run your entire restaurant
          </h1>
          <p className="product-hero__subtitle">
            Everything you need — POS, payments, analytics, and offline support
            — in one place.
          </p>
          <Link to="/waitlist" className="btn btn--primary btn--large">
            Get Started
          </Link>
        </div>
      </section>

      {/* Feature sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          className={`section product-section ${i % 2 === 1 ? 'section--alt' : ''}`}
          id={s.id}
        >
          <div className={`container product-section__inner ${i % 2 === 1 ? 'product-section__inner--reverse' : ''}`}>
            <div className="product-section__text">
              <span className="badge" style={{ background: s.bg, color: s.color }}>
                {s.badge}
              </span>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
            </div>
            <div className="product-section__visual">{s.mockup}</div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="cta-section__title">Ready to see it in action?</h2>
          <p className="cta-section__subtitle">
            Book a free demo and discover how POS Pay can transform your restaurant.
          </p>
          <div className="cta-section__actions">
            <Link to="/waitlist" className="btn btn--white btn--large">Book a Demo</Link>
            <Link to="/contact" className="btn btn--outline btn--large cta-section__outline">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
