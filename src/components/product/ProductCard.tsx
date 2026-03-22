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
          <h5 className="card-title">{product.title}</h5>
          {hasDiscount(product) ? (
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
        </div>
        <Link to="/product/$productId" params={{ productId: product.id }}>
          See details
        </Link>
        <button type="button" onClick={() => addToCart(product)}>
          {addedId !== product.id ? 'Add to cart' : 'Added to cart'}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
