import { Link } from '@tanstack/react-router';
import { useCartStore } from '../../store/cartStore.ts';
import { useState } from 'react';

const Header = () => {
  const itemCount = useCartStore((state) => state.itemCount);
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom sticky-top"
      style={{ zIndex: 100 }}
    >
      <div className="container">
        <Link
          to="/online-shop"
          className="navbar-brand fw-bold fs-4 d-flex align-items-center"
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
        <div
          className={`collapse navbar-collapse${expanded ? ' show' : ''}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link
                to="/online-shop"
                className="nav-link"
                activeProps={{ className: `active-link` }}
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
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{
                        fontSize: '0.75em',
                        minWidth: '1.3em',
                        minHeight: '1.3em',
                        padding: '0.25em 0.4em',
                      }}
                    >
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
