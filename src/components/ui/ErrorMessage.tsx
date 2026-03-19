const ErrorMessage = ({ error }: { error: unknown }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="alert alert-danger text-center p-4" role="alert">
          <h2 className="fw-semibold mb-4">Something went wrong</h2>
          <p className="text-muted mb-4">
            {error instanceof Error ? error.message : 'Unknown error'}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Please try again
          </button>
        </div>
      </div>{' '}
    </>
  );
};

export default ErrorMessage;
