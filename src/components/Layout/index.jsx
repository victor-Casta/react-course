import { ProductsPreview } from "../ProductsPreview"
import { CartProducts } from "../CartProducts"

function Layout({ children }) {
  return(
    <div className="px-4 sm:px-0 w-full h-fit mx-6 flex flex-col mt-24  max-w-[1240px]">
      { children }
      <ProductsPreview />
      <CartProducts />
    </div>
  )
}

export { Layout }