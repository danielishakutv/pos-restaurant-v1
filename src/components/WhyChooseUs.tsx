import './WhyChooseUs.css';

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0114.08 0" />
        <path d="M1.42 9a16 16 0 0121.16 0" />
        <path d="M8.53 16.11a6 6 0 016.95 0" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    ),
    title: 'Offline-first technology',
    desc: 'Keep working even without internet. Data syncs automatically when you reconnect.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 00-6 0v4" />
        <rect x="2" y="9" width="20" height="12" rx="2" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
    title: 'Simple and easy to use',
    desc: 'Minimal training needed. Your staff can start using it in minutes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
    title: 'Built for African businesses',
    desc: 'Designed around the payment methods and workflows used across Africa.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Lower operational costs',
    desc: 'Affordable pricing that grows with you. No hidden fees.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-heading text-center">
          <span className="badge">Why Us</span>
          <h2>Built for restaurants, not adapted for them</h2>
          <p>
            Every feature is designed from the ground up for the way restaurants
            actually work.
          </p>
        </div>

        <div className="grid grid--4 why-grid">
          {reasons.map((r) => (
            <div key={r.title} className="why-card">
              <div className="why-card__icon">{r.icon}</div>
              <h3 className="why-card__title">{r.title}</h3>
              <p className="why-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
