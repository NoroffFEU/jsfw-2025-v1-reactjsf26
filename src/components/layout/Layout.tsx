import Header from './Header.js';
import Footer from './Footer.jsx';
import { Outlet } from '@tanstack/react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
