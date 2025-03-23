import React from 'react';
import FloatingIcons from './FloatingIcons';
import Footer from './Footer';

function Home() {
  return (
    <div className="relative min-h-screen">
      <FloatingIcons />
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <h1 className="text-6xl font-bold text-center uppercase">
          CLOSING THE <br />
          GENDER TECH <br />
          GAP
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Home;