import { useState, useMemo } from 'react';
import { useRouter } from '@tanstack/react-router';
import { indexRoute } from '../routes';
import ProductContainer from '../components/product/ProductContainer';

const ITEMS_PER_PAGE = 10;

const HomePage = () => {
  const { products } = indexRoute.useLoaderData();

  const { query, page } = indexRoute.useSearch();
  const router = useRouter();
  const [localQuery, setLocalQuery] = useState(query || '');

  const filteredProducts = useMemo(
    () =>
      query
        ? products.filter((p) =>
            p.title.toLowerCase().includes(query.toLowerCase()),
          )
        : products,
    [products, query],
  );

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
      <div className="container input-group d-flex align-items-center justify-content-center text-center">
        <input
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for product..."
          className="border border-dark px-4 py-2 rounded-pill"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
          <button className="btn btn-secondary" onClick={clearSearch}>
            Clear
          </button>
        </div>
      </div>
      <h1>Our Products</h1>
      <ProductContainer
        products={currentItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        query={query}
      />
    </>
  );
};

export default HomePage;
