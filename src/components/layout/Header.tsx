import { Link } from '@tanstack/react-router';
import { useCartStore } from '../../store/cartStore.ts';
import { useState } from 'react';

const Header = () => {
  const itemCount = useCartStore((state) => state.itemCount);
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top"
      style={{ zIndex: 100 }}
    >
      <div className="container py-2 align-items-center">
        <Link
          to="/"
          className="navbar-brand app-brand d-inline-flex align-items-center mb-0 focus-ring-0"
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
          <ul className="navbar-nav ms-auto mb-0 align-items-lg-center gap-2">
            <li className="nav-item pt-3 pt-lg-0">
              <Link
                to="/"
                className="nav-link rounded-pill px-3 fw-semibold text-dark-emphasis"
                activeProps={{
                  className:
                    'nav-link rounded-pill px-3 fw-semibold text-dark active-link',
                }}
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link rounded-pill px-3 fw-semibold text-dark-emphasis"
                activeProps={{
                  className:
                    'nav-link rounded-pill px-3 fw-semibold text-dark active-link',
                }}
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-link rounded-pill px-3 fw-semibold text-dark-emphasis position-relative d-flex align-items-center justify-content-center"
                activeProps={{
                  className:
                    'nav-link rounded-pill px-3 fw-semibold text-dark active-link position-relative d-flex align-items-center justify-content-center',
                }}
                aria-label="Cart"
                onClick={handleNavClick}
              >
                <span className="position-relative d-inline-flex align-items-center gap-2">
                  <i className="bi bi-cart3 fs-5"></i>
                  <span className="d-lg-none">Cart</span>
                  {itemCount > 0 && (
                    <>
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none d-lg-inline"
                        style={{ minWidth: '1.45em', minHeight: '1.45em' }}
                      >
                        {itemCount}
                      </span>
                      <span
                        className="badge rounded-pill bg-danger d-lg-none"
                        style={{ minWidth: '1.45em', minHeight: '1.45em' }}
                      >
                        {itemCount}
                      </span>
                    </>
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
