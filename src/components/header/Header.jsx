import "./style.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h3 className="logo-name">Aghahowa Osamudiamen</h3>
      </div>
      <div className="items">
        <a href="#" className="item">
          <img className="social-icon" src="/instagram.svg" alt="instagram" />
        </a>
        <a href="#" className="item">
          <img className="social-icon" src="/twitter.svg" alt="twitter" />
        </a>
        <a href="#" className="item">
          <img className="social-icon" src="/linkedin.svg" alt="linkedin" />
        </a>
        <a href="#" className="item">
          <img className="social-icon" src="/github.svg" alt="github" />
        </a>
      </div>
    </div>
  );
}
