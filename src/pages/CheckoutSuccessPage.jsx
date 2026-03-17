import { useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';
import { useCartStore } from '../store/cartStore.ts';

const CheckoutSuccessPage = () => {
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

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
