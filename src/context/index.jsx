/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const ShoppingContext = createContext()

function ShoppingContextProvider({children}) {

  const [ count, setCount ] = useState(0)

  const [ isProductPreviewOpen, setIsProductPreviewOpen ] = useState(false)
  const openProductPreview = () => setIsProductPreviewOpen(true)
  const closeProductPreview = () => setIsProductPreviewOpen(false)

  const [ isCartProductsOpen, setIsCartProductsOpen ] = useState(false)
  const openCartProducts = () => setIsCartProductsOpen(true)
  const closeCartProducts = () => setIsCartProductsOpen(false)

  const [ productPreviewData, setProductPreviewData ] = useState({})
  const [ productsToCart, setProductsToCart ] = useState([])

  const [ order, setOrder ] = useState([])

  return (
    <ShoppingContext.Provider value={{
      count,
      setCount,
      isProductPreviewOpen,
      openProductPreview,
      closeProductPreview,
      productPreviewData,
      setProductPreviewData,
      productsToCart,
      setProductsToCart,
      isCartProductsOpen,
      openCartProducts,
      closeCartProducts,
      order,
      setOrder
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export { ShoppingContextProvider }