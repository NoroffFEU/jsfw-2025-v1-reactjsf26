import { Link } from '@tanstack/react-router';

const Footer = () => {
  return (
    <footer className="footer-main border-top bg-white py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center gap-2 text-muted small">
          <i className="bi bi-c-circle"></i>
          <span>2026 PROD INC</span>
        </div>
        <div className="text-muted small">All rights reserved.</div>
      </div>
    </footer>
  );
};
export default Footer;
