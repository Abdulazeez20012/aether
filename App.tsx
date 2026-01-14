
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Program from './pages/Program.tsx';
import Audience from './pages/Audience.tsx';
import Application from './pages/Application.tsx';
import Confirmation from './pages/Confirmation.tsx';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Assistant from './components/Assistant.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/audience" element={<Audience />} />
            <Route path="/apply" element={<Application />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
        <Assistant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
