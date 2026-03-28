import { useState } from 'react';
import type { Product } from '../types/index';
import { productDetailsRoute } from '../routes.tsx';
import { useCartStore } from '../store/cartStore.ts';
import ToastContainer from '../components/ui/ToastContainer';

const hasDiscount = (product: Product) =>
  product.discountedPrice < product.price;

const discountPercent = (product: Product) =>
  Math.round((1 - product.discountedPrice / product.price) * 100);

const ProductDetailPage = () => {
  const { product } = productDetailsRoute.useLoaderData();
  const addItem = useCartStore((state) => state.addItem);

  const [toastItem, setToastItem] = useState<{
    title: string;
    price: number;
  } | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setToastItem({ title: product.title, price: product.discountedPrice });
    setTimeout(() => setAdded(false), 5000);
    setTimeout(() => setToastItem(null), 5000);
  };

  return (
    <>
      <title>{product.title ?? 'Product Details'}</title>
      <meta
        name="description"
        content={
          product.description ?? 'Product details page for our favorite items'
        }
      />
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6">
            <div
              className="position-relative rounded overflow-hidden shadow-sm"
              style={{ height: '480px' }}
            >
              <img
                src={product.image.url}
                alt={product.image.alt}
                className="w-100 h-100 object-fit-cover object-center"
              />
              {hasDiscount(product) && (
                <div className="position-absolute discount-div top-0 start-0 mt-3 d-inline-flex flex-column align-items-center justify-content-center">
                  <span>
                    {discountPercent(product)}{' '}
                    <i className="bi bi-percent" style={{ fontSize: '1rem' }}>
                      {' '}
                      <span className="visually-hidden">hidden</span>
                    </i>
                  </span>
                  <span className="discount">OFF</span>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column gap-3">
            <div>
              <h1 className="fw-bold mb-1">{product.title}</h1>
              <div className="mb-2">
                <span className="small">Rating: {product.rating} / 5</span>
              </div>
              {product.tags.length > 0 && (
                <div className="d-flex flex-wrap gap-1">
                  {product.tags.map((tag) => (
                    <span key={tag} className="badge bg-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <p className="text-muted">{product.description}</p>

            <div>
              {hasDiscount(product) ? (
                <div className="d-flex align-items-baseline gap-2">
                  <span className="fs-3">{product.discountedPrice} NOK</span>
                  <span className="text-decoration-line-through">
                    {product.price} NOK
                  </span>
                </div>
              ) : (
                <span className="fs-3 fw-bold">{product.price} NOK</span>
              )}
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`btn align-self-start ${added ? 'btn-success' : 'btn-dark'}`}
            >
              {added ? (
                <>
                  <i className="bi bi-check-lg me-2" />
                  Added
                </>
              ) : (
                <>Add to cart</>
              )}
            </button>
          </div>
        </div>

        {toastItem && (
          <ToastContainer item={toastItem} onClose={() => setToastItem(null)} />
        )}
      </div>
    </>
  );
};

export default ProductDetailPage;
