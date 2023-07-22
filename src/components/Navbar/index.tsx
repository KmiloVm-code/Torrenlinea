import { UserIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo.png'
import { useContext } from 'react';
import { NavbarContext } from '../../contexts/NavbarContext';

const Navbar = () => {

  const navBarContext = useContext(NavbarContext);

  return (
    <div className='sticky top-0 bg-gray-900'>

      <nav className="flex items-center justify-between md:justify-evenly px-5 md:px-8 py-3 md:py-4">

        <div className="flex md:hidden items-center">
          <button className="text-white text-xl focus:outline-none" onClick={() => navBarContext.toggleMenu()}>
            {navBarContext.isMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        <div className='flex items-center gap-3'>
          <img src={Logo} alt="Logo" className='w-8 h-8 md:w-12 md:h-12' />
          <p className='text-white text-lg font-medium'>Torrenlinea</p>
        </div>

        <div className="hidden md:flex items-center w-2/5">
          <input type="text" placeholder="Buscar en Torrenlinea.com" className="w-full h-10 px-4 rounded-full bg-gray-800/80 text-white" />
        </div>

        <div className="flex items-center gap-3 md:gap-4">

          <div className='hidden md:flex items-center gap-3'>
            <div className='flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-white font-medium cursor-pointer'>
              <p>Login</p>
            </div>
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 cursor-pointer">
              <UserIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>

          <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800/80 cursor-pointer">
            <ShoppingBagIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar