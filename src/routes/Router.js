import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppNavbar from '../components/AppNavbar';

function Router() {
  return (
    <>
      <AppNavbar />
      <Header />
        <h1>my turn~</h1>
      <Footer />
    </>
  );
}

export default Router;