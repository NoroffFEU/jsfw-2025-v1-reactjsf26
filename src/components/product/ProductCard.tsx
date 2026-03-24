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
        <div
          className="position-relative overflow-hidden"
          style={{ height: '220px' }}
        >
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-100 h-100 object-fit-cover"
          />
          {hasDiscount(product) && (
            <span className="badge bg-danger position-absolute top-0 end-0 m-2">
              -{discountPercent(product)}%
            </span>
          )}
        </div>
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
              className={`btn btn-sm flex-fill fw-semibold ${addedId === product.id ? 'btn-success' : 'btn-dark'}`}
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
