import { RootRoute, Route, Router } from '@tanstack/react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/OnlineShop';
import CartPage from './pages/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorMessage from './components/ui/ErrorMessage';
import { SHOP_API_URL } from './constants/api';
import type { ApiAllProducts, ApiSingleProducts } from './types/index';

const mapResponseError = (status: number) => {
  switch (status) {
    case 400:
      return 'Bad request!';
    case 404:
      return 'Product not found!';
    case 429:
      return 'Too many requests. Please wait a moment and retry.';
    default:
      return 'Server error. Try again later.';
  }
};

const mapFetchError = (error: unknown) => {
  if (error instanceof Error) {
    if (error.message === 'Failed to fetch') {
      return new Error('Network unavailable. Check your connection and try again.');
    }

    return error;
  }

  return new Error('Something unexpected happened. Please try again.');
};

const rootRoute = new RootRoute({
  component: Layout,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
  loader: async () => {
    try {
      const response = await fetch(SHOP_API_URL);

      if (!response.ok) {
        throw new Error(mapResponseError(response.status));
      }

      const result: ApiAllProducts = await response.json();
      return { products: result.data };
    } catch (error) {
      throw mapFetchError(error);
    }
  },
  pendingComponent: () => {
    return (
      <LoadingSpinner
        title="Loading products"
        description="Fetching the latest items for your shop view."
      />
    );
  },
  errorComponent: ({ error }) => {
    return (
      <ErrorMessage
        error={error}
        title="Could not load products"
        description="We could not fetch the catalog right now."
        retryLabel="Reload products"
        onRetry={() => window.location.reload()}
      />
    );
  },
  validateSearch: (searchParams) => {
    return {
      query: searchParams?.query ? String(searchParams.query) : undefined,
      page: Number(searchParams?.page) || 1,
    };
  },
});

const cartRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/cart',
  component: CartPage,
});

const checkoutSuccessRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/checkout-success',
  component: CheckoutSuccessPage,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

export const productDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/$productId',
  component: ProductDetailPage,
  loader: async ({ params }) => {
    try {
      const response = await fetch(`${SHOP_API_URL}/${params.productId}`);

      if (!response.ok) {
        throw new Error(mapResponseError(response.status));
      }

      const result: ApiSingleProducts = await response.json();
      const productData = result.data;

      return { product: productData };
    } catch (error) {
      throw mapFetchError(error);
    }
  },
  pendingComponent: () => {
    return (
      <LoadingSpinner
        title="Loading product details"
        description="Gathering product information and pricing."
      />
    );
  },
  errorComponent: ({ error }) => {
    return (
      <ErrorMessage
        error={error}
        title="Could not load this product"
        description="This product is unavailable right now or the request failed."
        retryLabel="Retry product request"
        onRetry={() => window.location.reload()}
      />
    );
  },
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  cartRoute,
  checkoutSuccessRoute,
  contactRoute,
  productDetailsRoute,
  notFoundRoute,
]);
export const router = new Router({ routeTree });
