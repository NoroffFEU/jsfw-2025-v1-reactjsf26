import { Link } from '@tanstack/react-router';

const NotFoundPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center flex-grow-1 text-center">
      <h1>404 - Page not Found</h1>
      <p>We are sorry but the page was not found</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
};
export default NotFoundPage;
