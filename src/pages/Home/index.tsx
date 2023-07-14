import Header from '../../components/Header'
import Menu from '../../components/Menu'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <div className='w-screen'>
      <Navbar />
      <Menu />
      <Header />
    </div>
  )
}

export default Home