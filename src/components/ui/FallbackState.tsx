type FallbackStateProps = {
  variant: 'loading' | 'error';
  title?: string;
  description?: string;
  error?: unknown;
  fullPage?: boolean;
  onRetry?: () => void;
  retryLabel?: string;
};

const resolveErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return 'Something unexpected happened. Please try again.';
};

const FallbackState = ({
  variant,
  title,
  description,
  error,
  fullPage = true,
  onRetry,
  retryLabel = 'Try again',
}: FallbackStateProps) => {
  const wrapperClassName = fullPage
    ? 'fallback-shell fallback-shell--full'
    : 'fallback-shell';

  if (variant === 'loading') {
    return (
      <section className={wrapperClassName} aria-live="polite" aria-busy="true">
        <div className="text-center fallback-panel">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading</span>
          </div>
          <h2 className="h4 fw-semibold mb-2">{title ?? 'Loading content'}</h2>
          <p className="text-muted mb-0">
            {description ?? 'Please wait while we get things ready.'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={wrapperClassName} role="alert" aria-live="assertive">
      <div className="fallback-panel alert alert-danger text-center p-4 mb-0">
        <h2 className="fw-semibold mb-3">{title ?? 'Something went wrong'}</h2>
        <p className="text-muted mb-4">
          {description ?? resolveErrorMessage(error)}
        </p>
        {onRetry && (
          <button className="btn btn-primary" onClick={onRetry} type="button">
            {retryLabel}
          </button>
        )}
      </div>
    </section>
  );
};

export default FallbackState;
