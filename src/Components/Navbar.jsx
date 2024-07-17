import { Link } from 'react-router-dom';
// import logo from '../../public/vite.svg';

const Navbar = () => {
  const menu = [
    { pageName: "Home", path: "/" },
    { pageName: "Services", path: "/services" },
    { pageName: "About", path: "/about" },
    { pageName: "Blog", path: "/blog" },
    { pageName: "Contact", path: "/contact" },   
  ];

  return (
    <header className='bg-black text-white grid grid-cols-3 py-4 px-4'>
      <div>
        {/* <img src={logo} alt='logo' /> */}
      </div>
      <nav className="column flex justify-center items-center">
        <ul className="flex gap-4 pr-4">
          {menu.map((item, index) => (
            <li key={index} className="px-4 py-2 rounded-2xl sm:grid-flow-col items-center justify-center gap-1 hover:bg-gray-100 hover:text-black  ">
              <Link to={item.path}>
                {item.pageName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
