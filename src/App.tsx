/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import CategoryDetail from './pages/CategoryDetail';
import ProductDetail from './pages/ProductDetail';
import Sizes from './pages/Sizes';
import Fabrics from './pages/Fabrics';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        // scroll-mt-32 in Tailwind handles the offset
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o-firmie" element={<About />} />
          <Route path="produkty" element={<Navigate to="/produkty/t-shirty" replace />} />
          <Route path="produkty/:slug" element={<CategoryDetail />} />
          <Route path="produkty/:categorySlug/:productId" element={<ProductDetail />} />
          <Route path="rozmiary" element={<Sizes />} />
          <Route path="tkaniny" element={<Fabrics />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
