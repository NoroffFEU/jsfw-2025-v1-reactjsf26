import { RootRoute, Route, Router } from '@tanstack/react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorMessage from './components/ui/ErrorMessage';
import { SHOP_API_URL } from './constants/api';
import type { ApiAllProducts, ApiSingleProducts } from './types/index';

const rootRoute = new RootRoute({
  component: Layout,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
  loader: async () => {
    const response = await fetch(SHOP_API_URL);

    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('Bad request!');
        case 404:
          throw new Error('Product not found!');
        case 429:
          throw new Error('Too many Requests, please wait');
        default:
          throw new Error('Server error, try again later');
      }
    }

    const result: ApiAllProducts = await response.json();
    return { products: result.data };
  },
  pendingComponent: () => {
    return <LoadingSpinner />;
  },
  errorComponent: ({ error }) => {
    return <ErrorMessage error={error} />;
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
  path: `/product/$productId`,
  component: ProductDetailPage,
  loader: async ({ params }) => {
    const response = await fetch(`${SHOP_API_URL}/${params.productId}`);

    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error('Bad request!');
        case 404:
          throw new Error('Product not found!');
        case 429:
          throw new Error('Too many Requests, please wait');
        default:
          throw new Error('Server error, try again later');
      }
    }

    const result: ApiSingleProducts = await response.json();
    const productData = result.data;

    return { product: productData };
  },
  pendingComponent: () => {
    return <LoadingSpinner />;
  },
  errorComponent: ({ error }) => {
    return <ErrorMessage error={error} />;
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
