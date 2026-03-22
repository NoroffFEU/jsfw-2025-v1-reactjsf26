
import { Link } from '@tanstack/react-router';
import { useCartStore } from '../../store/cartStore.ts';
import { useState } from 'react';


const Header = () => {
  const itemCount = useCartStore((state) => state.itemCount);
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
      <div className="container py-2">
        <Link
          to="/"
          className="navbar-brand app-brand d-flex align-items-center text-uppercase"
          onClick={handleNavClick}
        >
          PROD INC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => setExpanded((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`} id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-1 app-nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link rounded-pill px-3 fw-semibold app-nav-link"
                activeProps={{ className: 'nav-link rounded-pill px-3 fw-semibold app-nav-link active-link' }}
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link rounded-pill px-3 fw-semibold app-nav-link"
                activeProps={{ className: 'nav-link rounded-pill px-3 fw-semibold app-nav-link active-link' }}
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link rounded-pill px-3 fw-semibold app-nav-link app-cart-link position-relative d-flex align-items-center justify-content-center"
                activeProps={{ className: 'nav-link rounded-pill px-3 fw-semibold app-nav-link app-cart-link active-link position-relative d-flex align-items-center justify-content-center' }}
                aria-label="Cart"
                onClick={handleNavClick}
              >
                <span className="position-relative d-inline-block">
                  <i className="bi bi-cart3 fs-5"></i>
                  {itemCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill app-cart-badge">
                      {itemCount}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
