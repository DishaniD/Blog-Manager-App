import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-sky-500">
          SOLED<span className="text-sky-500">AD</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-10 text-sky-500 font-medium ml-auto">
          <li>
            <a href="#" className="hover:text-sky-500">BLOG</a>
          </li>
          <li>
            <a href="#" className="hover:text-sky-500">ABOUT US</a>
          </li>
          <li>
            <a href="#" className="hover:text-sky-500">CONTACT</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 text-sky-500 ml-8">
          <a href="#" className="hover:text-sky-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-sky-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-sky-500">
            <i className="fab fa-pinterest"></i>
          </a>

          <a href="#" className="hover:text-sky-500">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#" className="hover:text-sky-500">
            <i className="fas fa-search"></i>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-sky-500">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
