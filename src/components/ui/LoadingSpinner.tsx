import FallbackState from './FallbackState';

type LoadingSpinnerProps = {
  title?: string;
  description?: string;
  fullPage?: boolean;
};

const LoadingSpinner = ({
  title,
  description,
  fullPage = true,
}: LoadingSpinnerProps) => {
  return (
    <FallbackState
      variant="loading"
      title={title}
      description={description}
      fullPage={fullPage}
    />
  );
};

export default LoadingSpinner;
