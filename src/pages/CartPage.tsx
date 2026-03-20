import { useRouter } from '@tanstack/react-router';
import { useCartStore } from '../store/cartStore.ts';

const formatPrice = (value: number) => value.toFixed(2);

const CartPage = () => {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const totalCost = useCartStore((state) => state.totalCost);
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);

  const handleCheckoutClick = () => {
    router.navigate({ to: '/checkout-success' });
  };

  if (items.length === 0) {
    return (
      <>
        <h1>Cart</h1>
        <p>Your cart is empty.</p>
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
          <button type="button" onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <p>Total: {formatPrice(totalCost)}</p>
      <button type="button" onClick={handleCheckoutClick}>
        Checkout
      </button>
    </>
  );
};

export default CartPage;
