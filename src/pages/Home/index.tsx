import Header from '../../components/Header'
import Menu from '../../components/Menu'
import MostSelledProducts from '../../components/MostSelledProducts'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <div className='w-screen'>
      <Navbar />
      <Menu />
      <Header />
      <MostSelledProducts />
    </div>
  )
}

export default Home