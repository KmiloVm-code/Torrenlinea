import { NavLink } from "react-router-dom"

const Menu = () => {

  const categories = [
    {
      id: 1,
      name: 'Accesorios',
    },
    {
      id: 2,
      name: 'Cargadores',
    },
    {
      id: 3,
      name: 'Audio',
    },
    {
      id: 4,
      name: 'Smartwatch',
    },
    {
      id: 5,
      name: 'Videojuegos',
    }
  ]

  return (
    <div className="bg-gray-900">
      <ul className='flex p-4 ml-14 justify-start items-center gap-5 text-lg text-white font-medium'>
        <li className='cursor-pointer hover:text-primary-500'>
          <NavLink to='/'>
            Inicio
          </NavLink>
        </li>
        <li className='cursor-pointer hover:text-primary-500'>
          <NavLink to='/tienda'>
            Todos los productos
          </NavLink>
        </li>
        {categories.map(category => (
          <li key={category.id} className='cursor-pointer hover:text-primary-500'>
            <NavLink to={`/tienda/${category.name}`} >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu