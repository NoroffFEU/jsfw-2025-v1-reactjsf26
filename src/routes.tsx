import { RootRoute, Route, Router } from '@tanstack/react-router';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import testProducts from "./mockData/testJSON.js"

const rootRoute = new RootRoute({
  component: Layout,
});

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
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
    const productData =  testProducts.find(p => p.id === params.productId);
    if (!productData) {
      throw new Error('Produkt ikke funnet!');
    }
    return { product: productData };
  },
  pendingComponent: () => <div>Laster produkt...</div>,
  errorComponent: ({ error }) => <div>Feil: {error.message}</div>,
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
