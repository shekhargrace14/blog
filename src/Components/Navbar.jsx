import { Link } from 'react-router-dom';
import logo from '../../public/vite.svg';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "Services", path: "/services" },
    { pageName: "About", path: "/about" },
    { pageName: "Blog", path: "/blog" },
    { pageName: "Contact", path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='bg-black text-white  relative h-full'>
      <nav className=' lg:container mx-auto flex justify-between items-center p-4'>
        <div>
          <Link to="/">
            {/* <img className='cursor-pointer' src={logo} alt='logo' /> */}
            <img className='cursor-pointer' src={logo} alt='logo'  onClick={()=> !toggleMenu ? setMenuOpen(true)   : setMenuOpen(false)  } />
          </Link>
        </div>
        <div className="column md:flex hidden justify-center items-center">
          <ul className="flex gap-4 pr-4">
            {menu.map((item, index) => (
              <li onClick={toggleMenu} key={index} className="px-4 py-2 rounded-2xl sm:grid-flow-col items-center justify-center gap-1 hover:bg-gray-100 hover:text-black">
                <Link to={item.path}>
                  {item.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {
          menuOpen ? 
            <IoMdClose onClick={toggleMenu} className='text-2xl text-white cursor-pointer md:hidden' />
          : 
            <GiHamburgerMenu onClick={toggleMenu} className='text-2xl text-white cursor-pointer md:hidden' />
        }
      </nav>
      {menuOpen && (
        <div className="absolute w-full h-screen left-0 bg-black md:hidden">
          <ul className="flex flex-col w-full h-screen text-center gap-4 pr-4">
            {menu.map((item, index) => (
              <li onClick={toggleMenu} key={index} className="px-4 py-2 rounded-2xl sm:grid-flow-col items-center justify-center gap-1 hover:bg-gray-100 hover:text-black">
                <Link to={item.path}>
                  {item.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
