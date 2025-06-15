import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  return (
    <nav className="flex gap-16 text-xl font-semibold tracking-[3px]">
      <Link
        to="/Menu"
        className="relative"
        onMouseEnter={() => setActiveLink('menu')}
        onMouseLeave={() => setActiveLink('')}
      >
        Menu
        <div
          className={`bg-gradient-to-r from-orange-900/30 to-orange-600  duration-300 h-1 mt-2 absolute ${
            activeLink === 'menu' ? 'w-full' : 'w-0'
          }`}
        ></div>
      </Link>
      <Link
        to="/About"
        className="relative"
        onMouseEnter={() => setActiveLink('about')}
        onMouseLeave={() => setActiveLink('')}
      >
        About
        <div
          className={`bg-gradient-to-r from-orange-900/30 to-orange-600  duration-300 h-1 mt-2 absolute ${
            activeLink === 'about' ? 'w-full' : 'w-0'
          }`}
        ></div>
      </Link>
      <Link
        to=""
        className="relative"
        onMouseEnter={() => setActiveLink('contact')}
        onMouseLeave={() => setActiveLink('')}
      >
        Contact
        <div
          className={`bg-gradient-to-r from-orange-900/30 to-orange-600 duration-300 h-1 mt-2 absolute ${
            activeLink === 'contact' ? 'w-full' : 'w-0'
          }`}
        ></div>
      </Link>
    </nav>
  );
};

export default NavLinks;
