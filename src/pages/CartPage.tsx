
import { useState } from 'react';
import { useRouter } from '@tanstack/react-router';
import { useCartStore } from '../store/cartStore.ts';
import ToastContainer from '../components/ui/ToastContainer';

const formatPrice = (value: number) => value.toFixed(2);

const CartPage = () => {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const totalCost = useCartStore((state) => state.totalCost);

  // Calculate original total and discount
  const originalTotal = items.reduce((sum, item) => sum + (item.originalPrice ?? item.price) * item.quantity, 0);
  const discountedTotal = totalCost;
  const discount = originalTotal - discountedTotal;
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);

  const [removedItem, setRemovedItem] = useState<{
    title: string;
    price: number;
  } | null>(null);

  const handleCheckoutClick = () => {
    router.navigate({ to: '/checkout-success' });
  };

  const handleRemove = (id: string, title: string, price: number) => {
    removeItem(id);
    setRemovedItem({ title, price });
    setTimeout(() => setRemovedItem(null), 5000);
  };

  if (items.length === 0) {
    return (
      <section className="container py-5">
        <h1 className="mb-4">Cart</h1>
        <div className="alert alert-info text-center">Your cart is empty.</div>
        {removedItem && (
          <ToastContainer
            item={removedItem}
            header="Removed from Cart"
            onClose={() => setRemovedItem(null)}
          />
        )}
      </section>
    );
  }

  return (
    <section className="container py-5">
      <h1 className="mb-4 fw-bold text-body" style={{ color: 'var(--color-text-heading)' }}>Cart</h1>
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="vstack gap-3">
            {items.map((item) => (
              <div key={item.id} className="card flex-row flex-wrap align-items-center p-3 gap-3 shadow-sm border-0 bg-white">
                <img
                  src={item.image.url}
                  alt={item.image.alt}
                  className="rounded object-fit-cover bg-light"
                  style={{ width: '90px', height: '90px' }}
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1 fw-semibold text-body" style={{ color: 'var(--color-text-heading)' }}>{item.title}</h5>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fw-bold fs-5 text-primary">{formatPrice(item.price)} NOK</span>
                    {item.quantity > 1 && (
                      <span className="text-muted small">x {item.quantity}</span>
                    )}
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <label htmlFor={`qty-${item.id}`} className="form-label mb-0 small text-muted">Qty</label>
                    <input
                      id={`qty-${item.id}`}
                      type="number"
                      min="1"
                      className="form-control form-control-sm"
                      style={{ width: '70px' }}
                      value={item.quantity}
                      onChange={(event) => setQuantity(item.id, Number(event.target.value))}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm ms-auto"
                  title="Remove from cart"
                  onClick={() => handleRemove(item.id, item.title, item.price * item.quantity)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 p-4 bg-white">
            <h4 className="mb-3 fw-semibold text-body" style={{ color: 'var(--color-text-heading)' }}>Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Items</span>
              <span className="fw-semibold text-body" style={{ color: 'var(--color-text-body)' }}>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            {/* Show original total and discount if there is a discount */}
            {discount > 0 && (
              <>
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Original Total</span>
                  <span className="text-muted text-decoration-line-through">{formatPrice(originalTotal)} NOK</span>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-semibold">Discount</span>
                  <span className="text-success">- {formatPrice(discount)} NOK</span>
                </div>
              </>
            )}
            <div className="d-flex justify-content-between mb-3">
              <span className="fw-semibold">Total</span>
              <span className="fw-bold fs-5 text-primary">{formatPrice(totalCost)} NOK</span>
            </div>
            <button
              type="button"
              className="btn btn-dark w-100 fw-semibold"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {removedItem && (
        <ToastContainer
          item={removedItem}
          header="Removed from Cart"
          onClose={() => setRemovedItem(null)}
        />
      )}
    </section>
  );
};

export default CartPage;
