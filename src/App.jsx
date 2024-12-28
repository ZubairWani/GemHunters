import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import React, { useEffect } from 'react'

import { Home } from './pages/Home/Home'
import { NoPage } from './pages/NoPage/NoPage'

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export const App = () => {
  return (
    <>
      <Router>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<NoPage />} />
        </Routes>

      </Router>

    </>
  )
}


