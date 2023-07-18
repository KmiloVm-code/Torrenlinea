import Brands from '../../components/Brands'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import MostSelledProducts from '../../components/MostSelledProducts'


const Home = () => {
  return (
    <>
      <Header />
      <MostSelledProducts />
      <Categories />
      <Brands />
    </>
  )
}

export default Home