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
  const clearSearch = () => {
    router.navigate({ to: '/', search: { query: '', page: 1 } });
    setLocalQuery('');
  };

  return (
    <>
      <title>Online Shop Page</title>
      <meta
        name="description"
        content="This is the online shop that where you can buy our amazing goods, best goods in town"
      />
      <div>
        <div
          className="container input-group d-flex  shadow-sm align-items-center justify-content-center text-center p-0 mb-4 mt-4"
          style={{ maxWidth: '350px' }}
        >
          <input
            type="text"
            value={localQuery}
            onChange={(e) => {
              setLocalQuery(e.target.value);
              router.navigate({
                to: '/',
                search: { query: e.target.value, page: 1 },
              });
            }}
            placeholder="Search for product..."
            className="form-control border rounded"
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary rounded-0 px-3"
              onClick={clearSearch}
            >
              Clear
            </button>
          </div>
        </div>
        <ProductContainer
          products={currentItems}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          query={query}
        />
      </div>
    </>
  );
};

export default HomePage;
