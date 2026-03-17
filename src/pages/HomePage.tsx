import { useState } from 'react';
import { useRouter } from '@tanstack/react-router';
import { indexRoute } from '../routes';
import ProductContainer from '../components/product/ProductContainer';

const ITEMS_PER_PAGE = 10;

const HomePage = () => {
  const { products } = indexRoute.useLoaderData();

  const { query, page } = indexRoute.useSearch();
  const router = useRouter();
  const [localQuery, setLocalQuery] = useState(query || '');

  const filteredProducts = query
    ? products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      )
    : products;

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);
  const indexOfFirst = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(
    indexOfFirst,
    indexOfFirst + ITEMS_PER_PAGE,
  );

  const handlePageChange = (newPage: number) => {
    router.navigate({ to: '/', search: { query, page: newPage } });
  };
  const handleSearch = () => {
    router.navigate({ to: '/', search: { query: localQuery, page: 1 } });
  };
  const clearSearch = () => {
    router.navigate({ to: '/', search: { query: '', page: 1 } });
    setLocalQuery('');
  };

  return (
    <>
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Search for product..."
      />
      <p>Search filter: {query ? `"${query}"` : 'None'}</p>@
      <div>
        <button onClick={handleSearch}>Søk</button>
        <button onClick={clearSearch}>Clear Search</button>
      </div>
      <h1>Our Products</h1>
      <ProductContainer
        products={currentItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
