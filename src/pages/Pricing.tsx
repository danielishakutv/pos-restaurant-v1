import { Link } from 'react-router-dom';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: 'to get started',
    features: ['Basic POS', 'Payment integration', 'Daily reports'],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₦25,000',
    period: '/month',
    features: [
      'Everything in Starter',
      'Inventory management',
      'Staff management',
      'Advanced reports',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    features: [
      'Everything in Growth',
      'Multi-location support',
      'Custom integrations',
      'Dedicated support',
    ],
    cta: 'Talk to Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <main className="pricing-page">
      <section className="section pricing-hero">
        <div className="container text-center">
          <span className="badge">Pricing</span>
          <h1 className="pricing-hero__title">Simple, transparent pricing</h1>
          <p className="pricing-hero__subtitle">
            No hidden fees. No surprises. Pick the plan that fits your restaurant.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card${plan.highlight ? ' pricing-card--highlight' : ''}`}
              >
                {plan.highlight && (
                  <span className="pricing-card__popular">Most Popular</span>
                )}
                <h3 className="pricing-card__name">{plan.name}</h3>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{plan.price}</span>
                  <span className="pricing-card__period">{plan.period}</span>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.name === 'Enterprise' ? '/contact' : '/waitlist'}
                  className={`btn btn--large ${plan.highlight ? 'btn--primary' : 'btn--outline'}`}
                  style={{ width: '100%' }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
