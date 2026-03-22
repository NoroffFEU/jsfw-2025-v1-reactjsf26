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

  const handleGoToContact = () => {
    router.navigate({ to: '/contact' });
  };

  return (
    <section className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
      <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 text-center bg-white" style={{ maxWidth: 560 }}>
        <div className="mb-4 d-flex justify-content-center">
          <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle text-success" style={{ width: '88px', height: '88px' }}>
            <i className="bi bi-bag-check-fill" style={{ fontSize: '2.2rem' }}></i>
          </span>
        </div>
        <h1 className="fw-bold mb-2 text-body">Thank you for your purchase!</h1>
        <p className="text-secondary mb-4">Your order was successful. You will receive a confirmation email soon.</p>

        <div className="alert alert-light border text-start mb-4">
          <p className="mb-1 fw-semibold">What happens next</p>
          <p className="mb-0 small text-secondary">Our team is preparing your order. If you need any support, contact us and include your order details.</p>
        </div>

        <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
          <button className="btn btn-dark fw-semibold px-4" onClick={handleGoHomeClick}>
            <i className="bi bi-house-door me-2"></i>Back to Home
          </button>
          <button className="btn btn-outline-secondary fw-semibold px-4" onClick={handleGoToContact}>
            <i className="bi bi-envelope me-2"></i>Contact support
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;
