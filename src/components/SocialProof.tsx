import './SocialProof.css';

export default function SocialProof() {
  return (
    <section className="section section--alt" id="social-proof">
      <div className="container text-center">
        <p className="proof__label">Trusted by growing restaurants</p>
        <div className="proof__logos">
          {/* Placeholder logos */}
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="proof__logo-placeholder">
              <span>Logo {n}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
