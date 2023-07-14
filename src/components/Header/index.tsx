import { BoltIcon } from '@heroicons/react/24/solid'
import Shipping from '../../assets/shipping.png'
import Offer from '../../assets/offer.png'

const Header = () => {
  return (
    <div className='flex p-10 justify-evenly'>
      <div className='grid content-evenly p-10 gap-7 w-1/2 mr-14'>
        <div>
          <p className='flex items-center gap-3'>
            <span className='font-semibold'>Oferta</span>

            <div className='flex px-4 py-1 items-center bg-black rounded-full gap-2'>
              <BoltIcon className='w-5 h-5 text-primary-500' />
              <span className=' text-white'> FULL</span>
            </div>
          </p>
        </div>

        <div>
          <p className='text-4xl font-bold m-4'>
            DÍAS DE INAUGURACIÓN HASTA EL 30 DE JULIO
          </p>
        </div>

        <div className='grid grid-flow-col justify-stretch gap-10'>
          <div className='flex items-center'>
            <div className='flex flex-col p-4 items-center bg-secondary rounded-full w-full h-20'>
              <span className='font-semibold'>OFERTAS HASTA</span>
              <span className='font-bold'>25% OFF</span>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='flex flex-col p-4 items-center bg-secondary rounded-full w-full h-20'>
              <span className='font-semibold'>ENVÍOS NACIONALES</span>
              <img src={Shipping} alt="shipping" className='w-6 h-6' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-1/2'>
        <figure className=''>
          <img src={Offer} alt="offer" className='w-full h-full object-contain' />
        </figure>
      </div>
    </div>
  )
}

export default Header