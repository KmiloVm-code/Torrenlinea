import { UserIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo.png'
import { useContext } from 'react';
import { NavbarContext } from '../../contexts/NavbarContext';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';
import SearchBar from '../SearchBar';

const Navbar = () => {

  const navBarContext = useContext(NavbarContext);

  const shoppingCartContext = useContext(ShoppingCartContext);

  return (
    <div className="sticky top-0 bg-gray-900 z-50">
      <nav className="w-full px-5 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-evenly">
          <div className="flex md:hidden items-center">
            <button className="text-white text-xl focus:outline-none" onClick={() => navBarContext.toggleMenu()}>
              {navBarContext.isMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
          </div>
  
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12" />
            <p className="text-white text-lg font-medium">Torrenlinea</p>
          </div>
  
          <div className="hidden md:flex items-center w-2/5">
            <SearchBar />
          </div>
  
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-white font-medium cursor-pointer group">
                <p>Login</p>
              </div>
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 cursor-pointer group">
                <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
  
            <NavLink to="/carrito">
              <div className="flex items-center justify-end w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 cursor-pointer group">
                <div className="absolute flex justify-center items-center w-4 h-4 p-3 top-3 bg-primary-500 rounded-full">
                  <p className="text-xs font-bold">{shoppingCartContext.countShoppingCartItems()}</p>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <ShoppingBagIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
  
        <div className="flex md:hidden items-center px-5 mt-5">
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}

export default Navbar