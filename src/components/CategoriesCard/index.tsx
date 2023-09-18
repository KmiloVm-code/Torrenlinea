import { Link } from "react-router-dom";

// Definir un objeto de categorías
const categories = [
  {
    title: 'CABLES – CARGADORES',
    slug: 'cargadores',
  },
  {
    title: 'AIRPODS-SMARTWATCH',
    slug: 'audio',
  },
  {
    title: 'ACCESORIOS',
    slug: 'accesorios',
  },
];

const CategoriesCard = ({ title, logo }: { title: string, logo: string }) => {
  const category = categories.find((category) => category.title === title);

  if (!category) {
    // Manejar el caso en el que no se encuentre una categoría
    return null;
  }

  return (
    <div>
      <p className='flex justify-center text-base sm:text-lg font-semibold mb-3'>{title}</p>
      <img src={logo} alt={`category_${category.slug}`} className='mb-4 rounded-sm' />
      <Link to={`/tienda/${category.slug}`}>
        <button className='bg-secondary rounded-lg px-8 py-2 text-lg font-medium text-primary-700'>Ver más</button>
      </Link>
    </div>
  );
};

export default CategoriesCard;
