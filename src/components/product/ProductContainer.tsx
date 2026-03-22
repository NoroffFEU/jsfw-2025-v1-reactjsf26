import { useState } from 'react';
import PaginationControls from '../helpers/PaginationControls';
import type { Product } from '../../types/index';
import { useCartStore } from '../../store/cartStore';
import ToastContainer from '../ui/ToastContainer';
import ProductCard from './ProductCard';

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
    setTimeout(() => setAddedId(null), 5000);
    setTimeout(() => setToastItem(null), 5000);
  };

  return (
    <section className="container">
      {products.length === 0 ? (
        <div className="text-center py-5 mt-5">
          <i className="bi bi-search fs-1 d-block mb-3" />
          <p className="h4">
            No products found for{' '}
            {query && (
              <strong>
                <span className="visually-hidden">hidden</span> "{query}"
              </strong>
            )}
          </p>
        </div>
      ) : (
        <div>
          <h1>Our Products</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addedId={addedId}
                addToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center py-5">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
            <p>
              Showing page {currentPage} of {totalPages}
            </p>
            {toastItem && (
              <ToastContainer
                item={toastItem}
                onClose={() => setToastItem(null)}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductContainer;
