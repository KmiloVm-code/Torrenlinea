import Cables from '../../assets/category_cables.png'
import Smartwacht from '../../assets/smartwacht_airpods.png'
import Accesories from '../../assets/accesories.png'
import CategoriesCard from '../CategoriesCard'

const Categories = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-5 bg-primary-500'>
      <h1 className='text-3xl font-bold mb-3 mt-6'>CATEGORÍAS</h1>
      <p className='text-2xl font-semibold mb-5'>¡Envió seguro, paga contra entrega!</p>

      <div className='grid grid-cols-3 gap-7 p-6 mb-6 max-w-screen-xl'>

        <CategoriesCard title='CABLES – CARGADORES' logo={Cables} />
        <CategoriesCard title='AIRPODS-SMARTWACHT' logo={Smartwacht} />
        <CategoriesCard title='ACCESORIOS' logo={Accesories} />

      </div>
    </div>
  )
}

export default Categories