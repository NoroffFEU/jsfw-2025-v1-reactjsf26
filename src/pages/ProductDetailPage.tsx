import { productDetailsRoute } from '../routes.tsx';
import { useCartStore } from '../store/cartStore.ts';

const ProductDetailPage = () => {
  const { product } = productDetailsRoute.useLoaderData();
  const addItem = useCartStore((state) => state.addItem);

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
      <button type="button" onClick={() => addItem(product)}>
        Add to cart
      </button>
    </>
  );
};

export default ProductDetailPage;
