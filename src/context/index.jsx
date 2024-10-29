/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react"
const BASE_URL_API = import.meta.env.VITE_BASE_API_URL

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

  const [ products, setProducs ] = useState(null)
  const [ categories, setCategories ] = useState(null)

  const [ searchProduct, setSearchProduct ] = useState('')

  useEffect(() => {
    try {
      fetch(`${BASE_URL_API}/products`)
        .then(response => response.json())
        .then(data => setProducs(data))
    } catch (error) {
      console.error(error)
    }
    try {
      fetch(`${BASE_URL_API}/categories`)
        .then(response => response.json())
        .then(data => setCategories(data))
    } catch (error) {
      console.error(error)
    }
  }, [])

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
      setOrder,
      products,
      categories,
      searchProduct,
      setSearchProduct
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export { ShoppingContextProvider }