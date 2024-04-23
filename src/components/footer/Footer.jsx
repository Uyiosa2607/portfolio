/* eslint-disable @next/next/no-img-element */
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="icons-container">
          <div className="icon-wrapper">
            <img src="/instagram.svg" alt="instagram" className="footer-icon" />
          </div>
          <div className="icon-wrapper">
            <img src="/linkedin.svg" alt="linkedin" className="footer-icon" />
          </div>
          <div className="icon-wrapper">
            <img
              src="/twitter.svg"
              alt="X(formaly Twitter)"
              className="footer-icon"
            />
          </div>
          <div className="icon-wrapper">
            <img src="/github.svg" alt="github" className="footer-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
