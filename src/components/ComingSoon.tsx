import './ComingSoon.css';

const upcoming = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r=".5" />
      </svg>
    ),
    title: 'AI Sales Insights',
    desc: 'Let AI spot trends and suggest ways to increase revenue.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Multi-Branch Management',
    desc: 'Manage all your locations from a single dashboard.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Customer Loyalty Program',
    desc: 'Reward your regulars and keep them coming back.',
  },
];

export default function ComingSoon() {
  return (
    <section className="section" id="coming-soon">
      <div className="container">
        <div className="section-heading text-center">
          <span className="badge" style={{ background: '#fef3c7', color: '#92400e' }}>
            Coming Soon
          </span>
          <h2>What's next</h2>
          <p>We're constantly building new features to help you grow.</p>
        </div>

        <div className="grid grid--3">
          {upcoming.map((item) => (
            <div key={item.title} className="coming-card">
              <div className="coming-card__icon">{item.icon}</div>
              <h3 className="coming-card__title">{item.title}</h3>
              <p className="coming-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
