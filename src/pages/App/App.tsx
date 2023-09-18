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
import { ProductProvider } from '../../contexts/ProductContext';
import Product from '../Product';
import { CategoryProvider } from '../../contexts/Categorycontext';

function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/tienda', element: <Shop /> },
      { path: '/tienda/:category', element: <Shop /> },
      { path: '/producto', element: <Product /> },
      { path: '/producto/:slug', element: <Product /> },
      { path: '/carrito', element: <Cart /> },
      { path: '*', element: <h1>Not found</h1> },
    ]);
    return routes;
  };

  return (
    <BrowserRouter>
      <NavbarProvider>
        <ShoppingCartProvider>
          <Navbar />
          <CategoryProvider>
            <ProductProvider>
              <Menu />
              <AppRoutes />
            </ProductProvider>
          </CategoryProvider>
          <Footer />
        </ShoppingCartProvider>
      </NavbarProvider>
    </BrowserRouter>
  )
}

export default App
