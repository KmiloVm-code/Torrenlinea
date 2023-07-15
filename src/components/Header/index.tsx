import { BoltIcon } from '@heroicons/react/24/solid'
import Shipping from '../../assets/shipping.png'
import Offer from '../../assets/offer.png'

const Header = () => {
  return (
    <div className='flex p-10 justify-evenly'>
      <div className='grid content-evenly p-10 gap-7 w-1/2 mr-14'>

        <div>
          <p className='text-4xl font-bold m-4'>
            DÍAS DE INAUGURACIÓN HASTA EL 30 DE JULIO
          </p>
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