import Home from '../Home'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Shop from '../Shop';

function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/tienda', element: <Shop /> },
    ]);
    return routes;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Menu />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
