import Brands from '../../components/Brands'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
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
      <Categories />
      <Brands />
      <Footer />
    </div>
  )
}

export default Home