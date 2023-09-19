import { useContext } from "react"
import Layout from "../../components/Layout"
import ProductCard from "../../components/ProductCard"
import { ProductContext } from "../../contexts/ProductContext"
import ProductCardSkeleton from "../../components/ProductCardSkeleton"

const Shop = () => {

  const { products, isLoading, error } = useContext(ProductContext);

  const renderProducts = () => {

    if (isLoading) {
      const skeletonElements = [];
      const numberOfSkeletons = 10;
    
      for (let index = 0; index < numberOfSkeletons; index++) {
        skeletonElements.push(<ProductCardSkeleton key={index} />);
      }
    
      return <>{skeletonElements}</>;
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

    </Layout>
  )
}

export default Shop