import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { to: '/product', label: 'Overview' },
      { to: '/pricing', label: 'Pricing' },
      { to: '/waitlist', label: 'Get Started' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/waitlist', label: 'Book a Demo' },
      { to: '/contact', label: 'Support' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#2563EB" />
                <path d="M10 11h12v2H10zm0 4h8v2h-8zm0 4h10v2H10z" fill="#fff" />
              </svg>
              <span>POS&nbsp;Pay</span>
            </Link>
            <p className="footer__tagline">
              Helping restaurants run smarter and earn more.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="footer__group">
              <h4 className="footer__group-title">{group.title}</h4>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} POS Pay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
