import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0f26] via-[#1f1f4f] to-[#3f3cbb] text-[#dcdfe4] font-sans">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback could be added */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
