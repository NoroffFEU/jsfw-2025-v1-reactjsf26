import FallbackState from './FallbackState';

type ErrorMessageProps = {
  error: unknown;
  title?: string;
  description?: string;
  fullPage?: boolean;
  retryLabel?: string;
  onRetry?: () => void;
};

const ErrorMessage = ({
  error,
  title,
  description,
  fullPage = true,
  retryLabel = 'Try again',
  onRetry,
}: ErrorMessageProps) => {
  return (
    <FallbackState
      variant="error"
      error={error}
      title={title}
      description={description}
      fullPage={fullPage}
      retryLabel={retryLabel}
      onRetry={onRetry ?? (() => window.location.reload())}
    />
  );
};

export default ErrorMessage;
