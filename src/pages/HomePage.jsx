import { useState } from 'react';
import testProducts from '../mockData/testJSON.ts';
import { indexRoute } from '../routes';
import ProductContainer from '../components/product/ProductContainer.jsx';

const HomePage = () => {
  const { query, page } = indexRoute.useSearch();
  const [localQuery, setLocalQuery] = useState(query || '');

  const filteredProducts = query
    ? testProducts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      )
    : testProducts;

  return (
    <>
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Søk etter produkter..."
      />
      <h1>Home Page</h1>
      <ProductContainer products={filteredProducts} />
    </>
  );
};

export default HomePage;
