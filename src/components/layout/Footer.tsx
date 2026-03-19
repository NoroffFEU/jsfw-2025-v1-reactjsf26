import { Link } from '@tanstack/react-router';

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <nav>
          <ul className="nav nav-pills justify-content-center border-bottom pb-3 mb-3">
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
                activeProps={{ className: `active-link` }}
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/"
          className="d-flex justify-content-center gap-2 me-md-auto link-body-emphasis text-decoration-none"
        >
          <i className={'bi bi-c-circle'}></i>
          PROD INC
        </Link>
      </footer>
    </div>
  );
};
export default Footer;
