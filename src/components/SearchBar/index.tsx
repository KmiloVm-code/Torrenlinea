import { useState } from "react";
import { useFetchProducts } from "../../api/useFetchProducts";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const url = `${import.meta.env.VITE_API_URL}products/?search=${searchValue}`;
  const { products } = useFetchProducts(url);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  }

  function renderSearchResults() {
    if (products.length === 0) {
      return (
        <a className="block p-2 hover:bg-indigo-50 cursor-pointer" key="no-results">
          No se encontraron resultados
        </a>
      );
    }

    return products.map((product) => (
      <a className="block p-2 hover:bg-gray-200 cursor-pointer" key={product.id} href="#">
        <figure className="flex gap-3 items-center">
          <img src={product.images[0].src} alt={product.name} className="w-10 h-10" />
          <figcaption>{product.name}</figcaption>
        </figure>
      </a>
    ));
  }

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="search"
          placeholder="Buscar en Torrenlinea.com"
          className="w-full h-10 px-4 rounded-full bg-gray-800/80 text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-300 pl-6"
          autoComplete="off"
          onChange={handleSearch}
        />
        <svg className="h-4 w-4 absolute right-6 top-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        {searchValue.length > 2 && (
          <div className="absolute z-10 w-full border rounded-lg shadow divide-y max-h-72 overflow-y-auto bg-white mt-1">
            {renderSearchResults()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

