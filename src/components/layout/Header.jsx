import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className=" d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          PROD INC
        </Link>
        <nav className="nav">
          <ul className="nav nav-pills">
            <li className="nav-item">
              {' '}
              <Link
                to="/"
                className="nav-lik text-body-secondary"
                activeProps={{ className: ` active-link` }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link
                to="/contact"
                className="nav-lik text-body-secondary"
                activeProps={{ className: ` active-link` }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {' '}
              <Link
                to="/cart"
                className="nav-lik text-body-secondary"
                activeProps={{ className: ` active-link` }}
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
      </header>
    </div>
  );
};

export default Header;
