import { createContext, useState } from "react"

export const ShoppingContext = createContext()

function ShoppingContextProvider({children}) {

  const [ count, setCount ] = useState(0)

  return (
    <ShoppingContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}

export { ShoppingContextProvider }