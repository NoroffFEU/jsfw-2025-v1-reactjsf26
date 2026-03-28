import { Link } from '@tanstack/react-router';
import type { Product } from '../../types/index';

const ProductCard = ({
  product,
  addedId,
  addToCart,
}: {
  product: Product;
  addedId: string | null;
  addToCart: (product: Product) => void;
}) => {
  const hasDiscount = (product: Product) =>
    product.discountedPrice < product.price;

  const discountPercent = (product: Product) =>
    Math.round((1 - product.discountedPrice / product.price) * 100);

  return (
    <div key={product.id}>
      <div className="card h-100 border-0 shadow-sm">
        <Link
          to="/$productId"
          params={{ productId: product.id }}
          className="position-relative overflow-hidden "
          style={{ height: '220px', cursor: 'pointer' }}
        >
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-100 h-100 rounded-top object-fit-cover"
          />
          {hasDiscount(product) && (
            <div className="position-absolute discount-div top-0 start-0 mt-3 d-inline-flex flex-column align-items-center justify-content-center">
              <span>
                {discountPercent(product)}
                <i className="bi bi-percent" style={{ fontSize: '1rem' }}>
                  {' '}
                  <span className="visually-hidden">hidden</span>
                </i>
              </span>
              <span className="discount">OFF</span>
            </div>
          )}
        </Link>
        <div className="card-body d-flex flex-column gap-2">
          <h5 className="card-title fw-semibold mb-0">{product.title}</h5>
          <div className="mt-auto pt-2">
            {hasDiscount(product) ? (
              <div className="d-flex align-items-baseline gap-2">
                <span className="fs-5">{product.discountedPrice} NOK</span>
                <span className="text-muted text-decoration-line-through small">
                  {product.price} NOK
                </span>
              </div>
            ) : (
              <span className="fw-bold fs-5">{product.price} NOK</span>
            )}
          </div>
          <div className="card-footer bg-transparent border-0 d-flex gap-2 px-0">
            <Link
              to="/$productId"
              params={{ productId: product.id }}
              className="btn btn-outline-secondary btn-sm flex-fill"
            >
              See details
            </Link>
            <button
              type="button"
              onClick={() => addToCart(product)}
              className={`btn btn-sm flex-fill ${addedId === product.id ? 'btn-success ' : 'btn-dark'}`}
            >
              {addedId !== product.id ? (
                <>Add to cart</>
              ) : (
                <>
                  <i className="bi bi-check-lg" /> Added
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
