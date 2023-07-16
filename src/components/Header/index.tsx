import Offer from '../../assets/offer.png'

const Header = () => {
  return (
    <div className='flex p-16 justify-center items-center mb-10 bg-black/80'>

      <div className='mr-4'>
        <div className='flex flex-col gap-10 text-white'>
          <h1 className='text-4xl font-bold'>
            Descubre una nueva dimension de sonido con los AirPods 3 pro
          </h1>
          <p className='text-lg font-medium'>
            La mejor experiencia de sonido con la mejor calidad de audio
          </p>
          <p className='p-3 text-lg font-medium rounded-lg border border-primary-500 shadow-md shadow-primary-400 w-fit'>
            ¡Adquierelos hoy mismo!
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center '>
        <figure>
          <img src={Offer} alt="offer" className=' object-contain rounded-lg' />
        </figure>
      </div>
    </div>
  )
}

export default Header