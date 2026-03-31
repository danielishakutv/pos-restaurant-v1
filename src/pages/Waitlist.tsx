import { type FormEvent, useState } from 'react';
import './Waitlist.css';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="waitlist-page">
      <section className="section waitlist-hero">
        <div className="container">
          <div className="waitlist-inner">
            <div className="waitlist-content">
              <span className="badge">Early Access</span>
              <h1 className="waitlist-content__title">
                Be the first to experience it
              </h1>
              <p className="waitlist-content__subtitle">
                We are currently onboarding early restaurants. Join the waitlist
                to get early access and special pricing.
              </p>

              <div className="waitlist-perks">
                {['Priority onboarding', 'Special launch pricing', 'Direct support from our team'].map((p) => (
                  <div key={p} className="waitlist-perk">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="waitlist-form-wrapper">
              {submitted ? (
                <div className="waitlist-success">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3>You're on the list!</h3>
                  <p>We'll reach out soon with your early access details.</p>
                </div>
              ) : (
                <form className="waitlist-form" onSubmit={handleSubmit}>
                  <h2 className="waitlist-form__heading">Join the Waitlist</h2>
                  <div className="form-group">
                    <label htmlFor="wl-name">Name</label>
                    <input type="text" id="wl-name" name="name" required placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="wl-restaurant">Restaurant Name</label>
                    <input type="text" id="wl-restaurant" name="restaurant" required placeholder="Your restaurant name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="wl-phone">Phone</label>
                    <input type="tel" id="wl-phone" name="phone" required placeholder="+234..." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="wl-email">Email</label>
                    <input type="email" id="wl-email" name="email" required placeholder="you@example.com" />
                  </div>
                  <button type="submit" className="btn btn--primary btn--large" style={{ width: '100%' }}>
                    Join Waitlist
                  </button>
                  <p className="waitlist-form__note">
                    No commitment. We'll never share your info.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
