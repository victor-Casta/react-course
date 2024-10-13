import { createContext, useState } from "react"

export const ShoppingContext = createContext()

function ShoppingContextProvider({children}) {

  const [ count, setCount ] = useState(0)
  const [ isProductPreviewOpen, setIsProductPreviewOpen ] = useState(false)

  const openProductPreview = () => setIsProductPreviewOpen(true)
  const closeProductPreview = () => setIsProductPreviewOpen(false)

  const [ productPreviewData, setProductPreviewData ] = useState({})

  console.log(productPreviewData)

  return (
    <ShoppingContext.Provider value={{
      count,
      setCount,
      isProductPreviewOpen,
      openProductPreview,
      closeProductPreview,
      productPreviewData,
      setProductPreviewData
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export { ShoppingContextProvider }