import './Features.css';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'POS System',
    items: [
      'Take orders quickly',
      'Manage tables and staff',
      'Track inventory in real-time',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    title: 'Payments',
    items: [
      'Accept cards, transfers, and QR',
      'Split bills easily',
      'Fast and secure transactions',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12V7H5a2 2 0 010-4h14v4" />
        <path d="M3 5v14a2 2 0 002 2h16v-5" />
        <path d="M18 12a2 2 0 100 4h4v-4h-4z" />
      </svg>
    ),
    title: 'Insights',
    items: [
      'Daily sales reports',
      'Performance tracking',
      'Customer insights',
    ],
  },
];

export default function Features() {
  return (
    <section className="section section--alt" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <span className="badge">Features</span>
          <h2>Everything your restaurant needs</h2>
          <p>
            Our platform combines POS, payments, and analytics into one seamless
            system designed specifically for restaurants.
          </p>
        </div>

        <div className="grid grid--3">
          {features.map((feature) => (
            <div key={feature.title} className="card feature-card">
              <div className="feature-card__icon">{feature.icon}</div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <ul className="feature-card__list">
                {feature.items.map((item) => (
                  <li key={item}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
