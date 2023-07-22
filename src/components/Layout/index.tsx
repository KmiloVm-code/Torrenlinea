import { ReactNode } from "react";
import { ProductDetailProvider } from "../../contexts/ProductDetailContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ProductDetailProvider>
      <div className="flex flex-col items-center my-16">
        {children}
      </div>
    </ProductDetailProvider>
  )
}

export default Layout