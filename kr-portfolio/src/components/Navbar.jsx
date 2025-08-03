import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const activeClass = 'text-accent-green border-b-2 border-accent-green';

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm">
      <div className="text-xl font-bold font-mono text-accent-green">KR PORTFOLIO</div>
      <div className="hidden md:flex gap-10">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) =>
              `text-sm relative px-1 transition ${isActive ? activeClass : 'hover:text-accent-green'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(o => !o)} aria-label="menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute right-6 top-16 bg-[#1f1f44] rounded-lg p-4 flex flex-col gap-3 w-40">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-accent-green font-semibold' : ''} hover:text-accent-green`
              }
            >
              {l.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
