import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { useParams } from "react-router-dom";
import { ProductDetailContext } from "../../contexts/ProductDetailContext";
import useProductQuantity from "../../hooks/useProductQuantity";
import ProductImageCarousel from "../../components/ProductImageCarousel";
import ProductDetails from "../../components/ProductDetails";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const shoppingCartContext = useContext(ShoppingCartContext);
  const { productDetail, loadDetails, isLoading } = useContext(ProductDetailContext);
  const { name, price, short_description, images } = productDetail ?? {};

  useEffect(() => {
    loadDetails(slug ?? "");
  }, [slug]);

  const { quantity, increment, decrement } = useProductQuantity();

  const addCart = () => {
    if (!productDetail) return;
    shoppingCartContext.addProduct({ ...productDetail, quantity });
  };



  const renderProductDetail = () => {
    if (isLoading) {
      return (
        <section className="relative w-full p-8 md:p-12 lg:p-16 2xl:p-20">
          <div className="container flex flex-col m-auto md:flex-row items-start px-4 md:px-8 lg:px-20">
            <div className="md:w-1/2 p-6 lg:p-10 product-image-carousel">
              <Skeleton width={500} height={500} /> {/* Tamaño del skeleton de la imagen */}
              <div className="flex mt-3 gap-5">
              <Skeleton width={80} height={80} /> {/* Tamaño del skeleton de la imagen */}
              <Skeleton width={80} height={80} /> {/* Tamaño del skeleton de la imagen */}
              <Skeleton width={80} height={80} /> {/* Tamaño del skeleton de la imagen */}
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 md:ml-6 mt-4 md:mt-0 gap-6 md:gap-8 p-10 tracking-tighter">
              <Skeleton height={40} width={300} /> {/* Tamaño del skeleton del título */}
              <Skeleton height={30} width={200} /> {/* Tamaño del skeleton del precio */}
              <Skeleton count={10} /> {/* Tres líneas de skeleton para la descripción */}
              <Skeleton height={40} width={200} /> {/* Tamaño del skeleton del botón de agregar al carrito */}
            </div>
          </div>
        </section>
      );
    }

    if (!productDetail) {
      return (
        <section className="relative w-full p-8 md:p-12 lg:p-16 2xl:p-20">
          <div className="container flex flex-col m-auto md:flex-row items-start px-4 md:px-8 lg:px-20">
            <div className="md:w-1/2 p-6 lg:p-10 product-image-carousel">
              <h1 className="text-4xl font-bold">Producto no encontrado</h1>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="relative w-full p-8 md:p-12 lg:p-16 2xl:p-20">
        <div className="container flex flex-col m-auto md:flex-row items-start px-4 md:px-8 lg:px-20">
          <div className="md:w-1/2 p-6 lg:p-10 product-image-carousel">
            <ProductImageCarousel images={images} />
          </div>
          <ProductDetails
            name={name}
            price={price}
            short_description={short_description}
            quantity={quantity}
            increment={increment}
            decrement={decrement}
            addCart={addCart}
          />
        </div>
      </section>
    );
  };


  return (
    <>
      {renderProductDetail()}
    </>
  );  
};

export default ProductPage;
