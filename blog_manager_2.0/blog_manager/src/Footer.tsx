import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-5 gap-8 px-8">
        {/* Solutions */}
        <div>
          <h3 className="text-lg font-bold text-white">Solutions</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Marketing</a></li>
            <li><a href="#" className="hover:text-white">Analytics</a></li>
            <li><a href="#" className="hover:text-white">Automation</a></li>
            <li><a href="#" className="hover:text-white">Commerce</a></li>
            <li><a href="#" className="hover:text-white">Insights</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold text-white">Support</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Submit ticket</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Guides</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-bold text-white">Legal</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Terms of service</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">License</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold text-white">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-400 mt-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="mt-6 flex w-full gap-2 justify-start ml-[-170px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-[300px] px-8 py-1 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            <button className="px-5 py-1 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">© 2024 Your Company, Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
