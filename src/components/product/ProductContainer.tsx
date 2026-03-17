import { Link } from '@tanstack/react-router';
import PaginationControls from '../helpers/PaginationControls';
import type { Product } from '../../types/index.ts';

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
  return (
    <section>
      {products.map((product) => (
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
        </div>
      ))}
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
