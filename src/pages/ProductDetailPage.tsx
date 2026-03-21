import { useState } from 'react';
import { productDetailsRoute } from '../routes.tsx';
import { useCartStore } from '../store/cartStore.ts';
import ToastContainer from '../components/ui/ToastContainer';

const ProductDetailPage = () => {
  const { product } = productDetailsRoute.useLoaderData();
  const addItem = useCartStore((state) => state.addItem);

  const [toastItem, setToastItem] = useState<{
    title: string;
    price: number;
  } | null>(null);

  const handleAddToCart = () => {
    addItem(product);
    setToastItem({ title: product.title, price: product.discountedPrice });
    setTimeout(() => setToastItem(null), 5000);
  };

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {product.discountedPrice < product.price ? (
        <>
          <p>
            <s>Price: {product.price}</s>
          </p>
          <p>Discount: {product.discountedPrice}</p>
        </>
      ) : (
        <p>Price: {product.price}</p>
      )}
      <button type="button" onClick={handleAddToCart}>
        Add to cart
      </button>
      {toastItem && (
        <ToastContainer item={toastItem} onClose={() => setToastItem(null)} />
      )}
    </>
  );
};

export default ProductDetailPage;
