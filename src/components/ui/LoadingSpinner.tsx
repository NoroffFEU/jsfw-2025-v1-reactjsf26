const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading</span>
        </div>
      </div>{' '}
    </>
  );
};

export default LoadingSpinner;
