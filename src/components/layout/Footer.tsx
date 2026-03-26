const Footer = () => {
  return (
    <footer className="border-top bg-body-tertiary mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row g-3 align-items-center justify-content-between">
          <div className="col-12 col-md-7">
            <p className="mb-1 text-uppercase fw-bold app-footer-brand">
              PROD INC
            </p>
            <p className="mb-0 small text-secondary">
              Shopping essentials with a clean, reliable checkout flow.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2 mt-4 pt-3 border-top text-secondary small">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-c-circle"></i>
            <span>{new Date().getFullYear()} PROD INC</span>
          </div>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
