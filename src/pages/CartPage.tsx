
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
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
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
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 text-center bg-white">
              <div className="mb-3">
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-body-secondary" style={{ width: '64px', height: '64px' }}>
                  <i className="bi bi-cart-x fs-3 text-secondary"></i>
                </span>
              </div>
              <h1 className="h3 mb-2">Your cart is empty</h1>
              <p className="text-secondary mb-4">Looks like you have not added anything yet.</p>
              <button
                type="button"
                className="btn btn-dark px-4 fw-semibold align-self-center"
                onClick={() => router.navigate({ to: '/' })}
              >
                Start shopping
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
  }

  return (
    <section className="container py-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
        <h1 className="mb-0 fw-bold text-body">Cart</h1>
        <span className="badge text-bg-light border text-secondary fw-semibold px-3 py-2 rounded-pill">
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="vstack gap-3">
            {items.map((item) => (
              <div key={item.id} className="card border-0 shadow-sm rounded-4 p-3 p-md-4 bg-white">
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <img
                    src={item.image.url}
                    alt={item.image.alt}
                    className="rounded-3 object-fit-cover bg-light"
                    style={{ width: '90px', height: '90px' }}
                  />
                  <div className="flex-grow-1">
                    <h2 className="h5 mb-1 fw-semibold text-body">{item.title}</h2>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="fw-bold fs-5 text-primary">{formatPrice(item.price)} NOK</span>
                      {item.quantity > 1 && (
                        <span className="text-muted small">x {item.quantity}</span>
                      )}
                    </div>
                    <p className="mb-0 small text-secondary">
                      Subtotal: <span className="fw-semibold text-body">{formatPrice(item.price * item.quantity)} NOK</span>
                    </p>
                  </div>

                  <div className="d-flex align-items-center gap-2 ms-lg-auto">
                    <span className="small text-secondary me-1">Qty</span>
                    <div className="btn-group" role="group" aria-label={`Quantity selector for ${item.title}`}>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        aria-label={`Decrease quantity of ${item.title}`}
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                      <span className="btn btn-light btn-sm disabled border border-secondary-subtle" aria-live="polite" aria-atomic="true">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        aria-label={`Increase quantity of ${item.title}`}
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      title="Remove from cart"
                      onClick={() => handleRemove(item.id, item.title, item.price * item.quantity)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 rounded-4 p-4 bg-white position-sticky" style={{ top: '6rem' }}>
            <h2 className="h4 mb-3 fw-semibold text-body">Order Summary</h2>
            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Items</span>
              <span className="fw-semibold text-body">{totalItems}</span>
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
              className="btn btn-dark w-100 fw-semibold py-2"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
            <p className="small text-secondary mb-0 mt-3">Shipping and taxes calculated at checkout.</p>
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
