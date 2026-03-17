import { useRouter } from '@tanstack/react-router';

const CheckoutSuccessPage = () => {
  const router = useRouter();

  const handleGoHomeClick = () => {
    router.navigate({ to: '/' });
  };

  return (
    <>
      <h1>CheckoutSuccessPage</h1>
      <button onClick={handleGoHomeClick}>Back to Home Page</button>
    </>
  );
};

export default CheckoutSuccessPage;
