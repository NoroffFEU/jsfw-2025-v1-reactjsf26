import { useState } from 'react';
import { useRouter } from '@tanstack/react-router';
import { useCartStore } from '../store/cartStore.ts';
import ToastContainer from '../components/ui/ToastContainer';

const formatPrice = (value: number) => value.toFixed(2);

const CartPage = () => {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const totalCost = useCartStore((state) => state.totalCost);
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
      <>
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
        {removedItem && (
          <ToastContainer
            item={removedItem}
            header="Removed from Cart"
            onClose={() => setRemovedItem(null)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <h1>Cart</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Price: {formatPrice(item.price)}</p>
          <label>
            Quantity
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(event) =>
                setQuantity(item.id, Number(event.target.value))
              }
            />
          </label>
          <button
            type="button"
            onClick={() => handleRemove(item.id, item.title, item.price * item.quantity)}
          >
            Remove
          </button>
        </div>
      ))}
      <p>Total: {formatPrice(totalCost)}</p>
      <button type="button" onClick={handleCheckoutClick}>
        Checkout
      </button>
      {removedItem && (
        <ToastContainer
          item={removedItem}
          header="Removed from Cart"
          onClose={() => setRemovedItem(null)}
        />
      )}
    </>
  );
};

export default CartPage;
