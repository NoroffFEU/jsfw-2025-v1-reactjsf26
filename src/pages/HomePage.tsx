import { useState, useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';
import { indexRoute } from '../routes';
import ProductContainer from '../components/product/ProductContainer';
import type { ApiAllProducts } from '../types/index.ts';
import { SHOP_API_URL } from '../constants/api.ts';

const ITEMS_PER_PAGE = 10;

const HomePage = () => {
  const { query, page } = indexRoute.useSearch();
  const router = useRouter();
  const [localQuery, setLocalQuery] = useState(query || '');
  const [products, setProducts] = useState<ApiAllProducts['data']>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(SHOP_API_URL);
        const result: ApiAllProducts = await response.json();
        setProducts(result.data);
      } catch (errors) {
        setError('Error on loading products, try again');
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const filteredProducts = query
    ? products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()),
      )
    : products;

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(Math.max(page, 1), totalPages || 1);
  const indexOfFirst = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(indexOfFirst, indexOfFirst + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    router.navigate({ to: '/', search: { query, page: newPage } });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        type="text"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        placeholder="Search for product..."
      />
      <h1>Home Page</h1>
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
