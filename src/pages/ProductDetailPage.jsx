import { productDetailsRoute } from '../routes';

const ProductDetailPage = () => {
  const { productId } = productDetailsRoute.useParams();

  return (
    <>
      <h1>ProductDetailPage: id{productId}</h1>
    </>
  );
};

export default ProductDetailPage;
