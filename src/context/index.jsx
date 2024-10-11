import { useContext } from "react"

const shoppingContext = useContext

function ShoppingContextProvider({children}) {
  return (
    <shoppingContext.Provider>
      {children}
    </shoppingContext.Provider>
  )
}

export { ShoppingContextProvider }