import facebook from './icons/facebookLogo.svg'
import instagram from './icons/instagramLogo.svg'
import whatsapp from './icons/whatsappLogo.svg'
import tiktok from './icons/tiktokLogo.svg'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer = () => {

  const socialNetworks = [
    {
      id: 1,
      name: 'facebook',
      image: facebook
    },
    {
      id: 2,
      name: 'instagram',
      image: instagram
    },
    {
      id: 3,
      name: 'whatsapp',
      image: whatsapp
    },
    {
      id: 4,
      name: 'tiktok',
      image: tiktok
    }
  ]

  return (
    // footer with brand information and product categories 
    <footer className="flex flex-col md:flex-row justify-evenly items-center sm:items-start bg-black/80 py-6 md:py-10 text-white">
      <div className='flex flex-col gap-4 md:gap-8 justify-center items-center'>
        <div className='flex items-center gap-3'>
          <img src={logo} alt="logo" className='w-8 h-8 md:w-10 md:h-10 text-primary-500' />
          <h1 className='text-2xl md:text-3xl font-bold text-primary-500'>Torrenlinea</h1>
        </div>
        <div className="flex gap-2 md:gap-4">
          {socialNetworks.map(socialNetwork => (
            <figure key={socialNetwork.id} className="flex justify-center items-center w-6 md:h-6 cursor-pointer">
              <img src={socialNetwork.image} alt={socialNetwork.name} className="w-full h-full object-contain" />
            </figure>
          ))}
        </div>
        <p className='text-xs md:text-sm font-semibold'>© 2023 Torrenlinea.com</p>
      </div>

      <div className='flex flex-col items-center sm:items-start mt-6 md:mt-0'>
        <h1 className='text-md md:text-lg font-bold mb-2 md:mb-4 text-primary-500'>Categorias</h1>
        <ul className='flex flex-col items-center sm:items-start gap-2 md:gap-4 text-xs md:text-sm font-medium'>
          <li>Accesorios</li>
          <li>Cargadores</li>
          <li>Audio</li>
          <li>Smartwatch</li>
          <li>Videojuegos</li>
        </ul>
      </div>

      <div className='flex flex-col items-center sm:items-start mt-6 md:mt-0'>
        <h1 className='text-md md:text-lg font-bold mb-2 md:mb-4 text-primary-500'>Información</h1>
        <ul className='flex flex-col items-center sm:items-start gap-2 md:gap-4 text-xs md:text-sm font-medium'>
          <li>Quienes somos</li>
          <li>Términos y condiciones</li>
          <li>Políticas de privacidad</li>
        </ul>
      </div>

      <div className='flex flex-col items-center sm:items-start mt-6 md:mt-0'>
        <h1 className='text-md md:text-lg font-bold mb-2 md:mb-4 text-primary-500'>Contacto</h1>
        <ul className='flex flex-col items-center sm:items-start gap-2 md:gap-4 text-xs md:text-sm font-medium'>
          <li>Teléfono: 3008068255</li>
          <li>Correo: info@torrenlinea.com </li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer