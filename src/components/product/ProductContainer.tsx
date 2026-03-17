import { Link } from '@tanstack/react-router';
import PaginationControls from '../helpers/PaginationControls';
import type { Product } from '../../types/index.ts';
import { useCartStore } from '../../store/cartStore.ts';

const ProductContainer = ({
  products,
  currentPage,
  totalPages,
  onPageChange,
}: {
  products: Product[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section>
      {products.length === 0 ? (
        <p>No products found...</p>
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
                  <s>Price: {product.price}</s>
                </p>
                <p>Discount: {product.discountedPrice}</p>
              </>
            ) : (
              <p>Price: {product.price}</p>
            )}

            <Link to="/product/$productId" params={{ productId: product.id }}>
              See details
            </Link>
            <button type="button" onClick={() => addItem(product)}>
              Add to cart
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
    </section>
  );
};

export default ProductContainer;
