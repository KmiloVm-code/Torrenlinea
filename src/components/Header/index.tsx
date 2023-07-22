import Offer from '../../assets/offer.png'

const Header = () => {
  return (
    <div className='grid sm:grid-cols-2 p-4 md:p-16 justify-center items-center md:justify-between mb-5 md:mb-10 bg-black/80'>

      <div className='md:mr-4'>
        <div className='flex flex-col gap-4 sm:gap-10 text-white'>
          <h1 className='text-2xl md:text-4xl font-bold'>
            Descubre una nueva dimensión de sonido con los AirPods 3 Pro
          </h1>
          <p className='text-base md:text-lg font-medium'>
            La mejor experiencia de sonido con la mejor calidad de audio
          </p>
          <p className='p-2 md:p-3 text-base md:text-lg font-medium rounded-lg border border-primary-500 shadow-md shadow-primary-400 w-fit'>
            ¡Adquiérelos hoy mismo!
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center mt-4 md:mt-0'>
        <figure>
          <img src={Offer} alt="offer" className='object-contain rounded-lg' />
        </figure>
      </div>
    </div>

  )
}

export default Header