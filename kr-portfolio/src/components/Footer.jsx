import React from 'react';

const Footer = () => (
  <footer className="w-full bg-[#0f0f26] py-8 mt-12">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6 md:px-16 gap-6">
      <div>
        <div className="text-xl font-bold text-accent-green mb-2">KR PORTFOLIO</div>
        <p className="text-sm">Building thoughtful web experiences.</p>
      </div>
      <div className="flex gap-8">
        <div>
          <h3 className="font-semibold mb-1">Links</h3>
          <div className="flex flex-col gap-1 text-sm">
            <a href="/" className="hover:text-accent-green">Home</a>
            <a href="/about" className="hover:text-accent-green">About</a>
            <a href="/projects" className="hover:text-accent-green">Projects</a>
            <a href="/contact" className="hover:text-accent-green">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Contact</h3>
          <p className="text-sm">karthikrajesh9010@gmail.com</p>
          

        </div>
      </div>
      <div className="text-sm self-end">
        © {new Date().getFullYear()} Karthik R S. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
