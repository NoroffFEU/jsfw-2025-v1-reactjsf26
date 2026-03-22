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
    <section className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      <div className="card shadow-sm border-0 p-5 text-center bg-white" style={{ maxWidth: 420 }}>
        <div className="mb-4">
          <i className="bi bi-bag-check-fill text-success" style={{ fontSize: '3rem' }}></i>
        </div>
        <h1 className="fw-bold mb-3 text-body" style={{ color: 'var(--color-text-heading)' }}>Thank you for your purchase!</h1>
        <p className="mb-4 text-muted">Your order was successful. You will receive a confirmation email soon.</p>
        <button className="btn btn-dark fw-semibold px-4" onClick={handleGoHomeClick}>
          <i className="bi bi-house-door me-2"></i>Back to Home Page
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;
