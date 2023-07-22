import Home from '../Home'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import Shop from '../Shop';
import { NavbarProvider } from '../../contexts/NavbarContext';

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
      <NavbarProvider>
        <Navbar />
        <Menu />
        <AppRoutes />
        <Footer />
      </NavbarProvider>
    </BrowserRouter>
  )
}

export default App
