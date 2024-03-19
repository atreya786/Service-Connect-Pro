import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-10">Service Connect Pro</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Anti-discrimination policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  UC impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* For customers */}
          <div>
            <h2 className="text-lg font-bold mb-4">For customers</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-gray-300">
                  UC reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Categories near you
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* For partners */}
          <div>
            <h2 className="text-lg font-bold mb-4">For partners</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Register as a professional
                </a>
              </li>
            </ul>
          </div>
          {/* Social links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Social links</h2>
            <ul className="list-none">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; Copyright 2024 Service Connect Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
