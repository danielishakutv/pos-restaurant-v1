import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="badge">Built for Restaurants</span>
          <h1 className="hero__title">
            The All-in-One POS &amp; Payment Platform for Restaurants
          </h1>
          <p className="hero__subtitle">
            Manage orders, accept payments, and track your business — all in one
            simple system built for restaurants in Africa.
          </p>
          <div className="hero__actions">
            <Link to="/waitlist" className="btn btn--primary btn--large">
              Get Started
            </Link>
            <Link to="/waitlist" className="btn btn--outline btn--large">
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          {/* Fake POS screen mockup */}
          <div className="hero__mockup">
            <div className="mockup__bar">
              <span className="mockup__dot" />
              <span className="mockup__dot" />
              <span className="mockup__dot" />
            </div>
            <div className="mockup__body">
              <div className="mockup__sidebar">
                <div className="mockup__menu-item mockup__menu-item--active" />
                <div className="mockup__menu-item" />
                <div className="mockup__menu-item" />
                <div className="mockup__menu-item" />
              </div>
              <div className="mockup__content">
                <div className="mockup__card-row">
                  <div className="mockup__stat-card mockup__stat-card--blue">
                    <div className="mockup__stat-label" />
                    <div className="mockup__stat-value" />
                  </div>
                  <div className="mockup__stat-card mockup__stat-card--green">
                    <div className="mockup__stat-label" />
                    <div className="mockup__stat-value" />
                  </div>
                  <div className="mockup__stat-card mockup__stat-card--amber">
                    <div className="mockup__stat-label" />
                    <div className="mockup__stat-value" />
                  </div>
                </div>
                <div className="mockup__chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
