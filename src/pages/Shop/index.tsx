import { useContext } from "react"
import Layout from "../../components/Layout"
import ProductCard from "../../components/ProductCard"
import ProductDetail from "../../components/ProductDetail"
import { ProductContext } from "../../contexts/ProductContext"

const Shop = () => {

  const { products, isLoading, error } = useContext(ProductContext);

  const renderProducts = () => {

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (error) {
      return <p>Something went wrong</p>
    }

    return products?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  }

  return (
    <Layout>
      <div className="grid justify-center items-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {renderProducts()}
      </div>

      <ProductDetail />
    </Layout>
  )
}

export default Shop