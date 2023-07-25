import Home from '../Home'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Shop from '../Shop';
import { NavbarProvider } from '../../contexts/NavbarContext';
import Cart from '../Cart';
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext';

function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/tienda', element: <Shop /> },
      { path: '/carrito', element: <Cart /> },
    ]);
    return routes;
  };

  return (
    <BrowserRouter>
      <NavbarProvider>
        <ShoppingCartProvider>
        <Navbar />
        <Menu />
        <AppRoutes />
        <Footer />
        </ShoppingCartProvider>
      </NavbarProvider>
    </BrowserRouter>
  )
}

export default App
