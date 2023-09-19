import { useEffect, useState } from "react";
import useFetchProducts from "../../api/useFetchProducts";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Product } from "../../models/Product";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const [resultProducts, setResultProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [showResults, setShowResults] = useState(false); // Estado para controlar la visibilidad de los resultados

  useEffect(() => {
    let isMounted = true;

    const FetchData = async () => {
      setIsLoading(true);
      useFetchProducts(`search=${searchValue}`)
        .then((products) => {
          if (isMounted) {
            console.log(products);
            setResultProducts(products);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          if (isMounted) {
            setError(error);
            setIsLoading(false);
          }
        });
    };

    if (searchValue.length >= 3) {
      FetchData();
    } else {
      setResultProducts([]);
    }

    return () => {
      isMounted = false;
    };
  }, [searchValue]);

  // Función para manejar clics fuera de la zona de resultados
  const handleOutsideClick = () => {
    setShowResults(false);
  };

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    setShowResults(searchValue.length >= 3); // Mostrar resultados cuando la longitud de la búsqueda es mayor o igual a 3
  }

  function renderSearchResults() {
    if (isLoading) {
      return <p className="p-2">Buscando productos...</p>;
    }

    if (error) {
      return <p className="p-2">Ocurrió un error al buscar los productos</p>;
    }

    if (resultProducts.length === 0) {
      return (
        <a className="block p-2 hover:bg-indigo-50 cursor-pointer" key="no-results">
          No se encontraron resultados
        </a>
      );
    }

    return resultProducts.map((product) => (
      <Link
        to={`/producto/${product.slug}`}
        className="block p-2 hover:bg-indigo-50 cursor-pointer"
        key={product.id}
        onClick={handleOutsideClick} // Ocultar resultados al hacer clic en un producto
      >
        <figure className="flex gap-3 items-center">
          <img src={product.images[0].src} alt={product.name} className="w-10 h-10" />
          <figcaption>{product.name}</figcaption>
        </figure>
      </Link>
    ));
  }

  return (
    <div className="w-full relative" onClick={handleOutsideClick}> {/* Manejar clics fuera de la zona de resultados */}
      <div className="relative">
        <input
          type="search"
          placeholder="Buscar en Torrenlinea.com"
          className="w-full h-10 px-4 rounded-full bg-gray-800/80 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-300 pl-6"
          autoComplete="off"
          onChange={handleSearch}
        />
        <MagnifyingGlassIcon className="h-4 w-4 absolute right-6 top-3 text-gray-400" aria-hidden="true" />
        {showResults && searchValue.length > 2 && ( //Mostrar resultados si showResults es true
          <div className="absolute z-10 w-full border rounded-lg shadow divide-y max-h-72 overflow-y-auto bg-white mt-1">
            {renderSearchResults()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;