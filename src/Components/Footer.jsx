// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/vite.svg';


const Footer = () => {
  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "Services", path: "/services" },
    { pageName: "About", path: "/about" },
    { pageName: "Blog", path: "/blog" },
    { pageName: "Contact", path: "/contact" },
  ];
  return (
    <footer className="bg-gray-800 text-white ">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap sm:justify-between sm:flex-row flex-col text-center">
          <div className="sm:w-auto w-full mb-4 sm:mb-0 flex sm:items-center justify-center">
            <Link to="/">
              <img className='cursor-pointer' src={logo} alt='logo' />
            </Link>
          </div>

          <div className="column ">
            <ul className="">
              {menu.map((item, index) => (
                <li key={index} className="">
                  <Link to={item.path}>
                    {item.pageName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <ul className="">
              <li>
                <a href="#" className="hover:text-gray-400">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">Instagram</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
      <div className='flex justify-center mt-4 bg-black p-4'>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
