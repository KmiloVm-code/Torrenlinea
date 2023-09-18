import { Link } from 'react-router-dom';
import Offer from '../../assets/offer.png';

const Header = () => {
  return (
    <div className='grid sm:grid-cols-2 p-4 md:p-16 justify-center items-center md:justify-between mb-5 md:mb-10 bg-black/80'>

      <div className='md:mr-4'>
        <div className='flex flex-col gap-6 sm:gap-10 text-white'>
          <h1 className='text-2xl md:text-4xl text-center sm:text-start font-bold mt-12 sm:mt-0'>
            Descubre una nueva dimensión de sonido con los AirPods 3 Pro
          </h1>
          <p className='text-base md:text-lg font-medium text-center sm:text-start mx-10 sm:mx-0 mb-5'>
            La mejor experiencia de sonido con la mejor calidad de audio
          </p>
          <Link to='/producto/audifonos-inalambricos-serie-3-magsafe-1-1'>
          <p className='flex justify-center p-2 md:p-3 text-base md:text-lg font-medium rounded-lg border border-primary-500 shadow-md shadow-primary-400 w-full sm:w-fit cursor-pointer'>
            ¡Adquiérelos hoy mismo!
          </p>
          </Link>
        </div>
      </div>

      <div className='flex justify-center items-center my-10 sm:my-0 sm:mt-4 md:mt-0'>
        <figure>
          <img src={Offer} alt="offer" className='object-contain rounded-lg' />
        </figure>
      </div>
    </div>
  );
}

export default Header;
