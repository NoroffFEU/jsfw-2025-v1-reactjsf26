import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import PaginationControls from '../helpers/PaginationControls';
import type { Product } from '../../types/index';
import { useCartStore } from '../../store/cartStore';
import ToastContainer from '../ui/ToastContainer';

const ProductContainer = ({
  products,
  currentPage,
  totalPages,
  onPageChange,
  query,
}: {
  products: Product[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  query?: string;
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const [toastItem, setToastItem] = useState<{
    title: string;
    price: number;
  } | null>(null);

  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setAddedId(product.id);
    setToastItem({ title: product.title, price: product.discountedPrice });
    setTimeout(() => setToastItem(null), 5000);
  };

  return (
    <section>
      {products.length === 0 ? (
        <p>No products found {query && `for "${query}"`}</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>
              Rating:
              <strong>{product.rating}</strong>
            </p>
            <img src={product.image.url} alt={product.image.alt} />

            {product.discountedPrice < product.price ? (
              <>
                <p>
                  Price:{' '}
                  <span className="text-decoration-line-through">
                    {product.price} NOK
                  </span>
                </p>
                <p>Discount: {product.discountedPrice} NOK</p>
              </>
            ) : (
              <p>Price: {product.price} NOK</p>
            )}

            <Link to="/product/$productId" params={{ productId: product.id }}>
              See details
            </Link>
            <button type="button" onClick={() => handleAddToCart(product)}>
              {addedId !== product.id ? 'Add to cart' : 'Added to cart'}
            </button>
          </div>
        ))
      )}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <p>
        Showing page {currentPage} of {totalPages}
      </p>
      {toastItem && (
        <ToastContainer item={toastItem} onClose={() => setToastItem(null)} />
      )}
    </section>
  );
};

export default ProductContainer;
