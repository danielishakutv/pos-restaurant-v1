import { Link } from 'react-router-dom';
import './CTA.css';

interface CTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTA({
  title = 'Start simplifying your restaurant today',
  subtitle = 'Join hundreds of restaurants already running smarter with POS Pay.',
  primaryLabel = 'Get Started',
  primaryTo = '/waitlist',
  secondaryLabel = 'Talk to Sales',
  secondaryTo = '/contact',
}: CTAProps) {
  return (
    <section className="cta-section">
      <div className="container text-center">
        <h2 className="cta-section__title">{title}</h2>
        <p className="cta-section__subtitle">{subtitle}</p>
        <div className="cta-section__actions">
          <Link to={primaryTo} className="btn btn--white btn--large">
            {primaryLabel}
          </Link>
          <Link to={secondaryTo} className="btn btn--outline btn--large cta-section__outline">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
