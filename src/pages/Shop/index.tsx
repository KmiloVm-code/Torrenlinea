import { useFetchProducts } from "../../api/useFetchProducts"
import Layout from "../../components/Layout"
import ProductCard from "../../components/ProductCard"
import ProductDetail from "../../components/ProductDetail"

const Shop = () => {

  const url = import.meta.env.VITE_API_URL;
  const {products, isLoading, error} = useFetchProducts(url + 'products/');
  return (
    <Layout>
      <div className="grid justify-center items-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {isLoading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ProductDetail />
    </Layout>
  )
}

export default Shop