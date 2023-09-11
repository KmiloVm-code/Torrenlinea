import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { NavbarContext } from "../../contexts/NavbarContext";
import { useFetchCategories } from "../../api/useFetchCategories";

const Menu = () => {

  const navBarContext = useContext(NavbarContext);

  const { categories, isLoading, error } = useFetchCategories();

  return (
    <div className={`${navBarContext.isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col h-screen md:h-auto p-4 md:pl-14 bg-gray-900`}>
      <ul className={`flex flex-col md:flex-row md:items-center md:justify-start gap-5 mb-5 text-lg text-white font-medium`}>
        <li>
          <NavLink to='/'>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to='/tienda'>
            Todos los productos
          </NavLink>
        </li>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        {categories?.filter(category => category.name !== 'Uncategorized').map(category => (
          <li key={category.id}>
            <NavLink to={`/tienda/${category.slug}`}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col md:hidden gap-5 pt-8 text-lg text-white font-medium border-t border-t-white">
        <li>
          Mis compras
        </li>
        <li>
          Iniciar sesion
        </li>
      </ul>
    </div>
  )
}

export default Menu