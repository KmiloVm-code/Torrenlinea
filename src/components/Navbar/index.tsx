import { UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex px-6 items-center justify-evenly bg-black/80 h-20">
      <img src={Logo} alt="Logo" className='w-12 h-12' />
      <input type="text" placeholder="Buscar en Torrenlinea.com" className="w-2/5 h-11 px-4 m-0 rounded-full bg-gray-800/80 text-white/80" />

      <div className="flex items-center gap-4">
        <div className='flex items-center justify-center w-10 h-10 text-white font-medium cursor-pointer'>
          <p>Login</p>
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 cursor-pointer">
          <UserIcon className="w-6 h-6 text-white/80" />
        </div>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 cursor-pointer">
          <ShoppingBagIcon className="w-6 h-6 text-white/80" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar