import React, { useState } from 'react'
import { Link} from 'react-router-dom';
// import logo from '../../public/vite.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "Services", path: "/services" },
    { pageName: "About", path: "/about" },
    { pageName: "Blog", path: "/blog" },
    { pageName: "Contact", path: "/contact" },
  ];
  return (
    <header className='bg-black text-white grid grid-cols-3 py-4 px-4 '>
      <div>
        {/* <img src={logo} alt='logo'/> */}
      </div>
      <nav className="column flex justify-center items-center">
          <ul className="flex gap-4 pr-4">
            {
              menu.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path}
                    >
                  <li className="flex items-center gap-2 text-primary-color text-1xl relative">
                    {item.icon} {item.pageName} {item.value ? (<span className="text-xs flex items-center justify-center text-white text-center w-5 h-5 rounded-full leading-none bg-primary-color absolute top-[-4px] right-[-12px]"> {item.value}</span>) : null}
                  </li>
                </Link>
              ))
            }
          </ul>
      </nav>
      <div className='grid justify-end'>
        <Link>
          <button className=''>Login</button>
        </Link>
      </div>
      
    </header>
  )
}

export default Navbar