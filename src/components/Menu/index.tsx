
const Menu = () => {
  return (
    <ul className='flex p-4 ml-3 justify-start items-center gap-4 text-lg font-medium'>
      <li className='cursor-pointer hover:text-gray-800/80'>
        Inicio
      </li>
      <li className='cursor-pointer hover:text-gray-800/80'>
        Todos los productos
      </li>
      <li className='cursor-pointer hover:text-gray-800/80'>
        Accesorios
      </li>
      <li className='cursor-pointer hover:text-gray-800/80'>
        Cargadores
      </li>
      <li className='cursor-pointer hover:text-gray-800/80'>
        Audio
      </li>
      <li className='cursor-pointer hover:text-gray-800/80'>
        Smartwatch
      </li>
      <li className='cursor-pointer hover:text-gray-800/80'>
        Video Juegos
      </li>
    </ul>
  )
}

export default Menu