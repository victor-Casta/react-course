import { useContext } from "react"

const shoppingContext = useContext

function shoppingContextProvider({children}) {
  return (
    <shoppingContext.Provider>
      {children}
    </shoppingContext.Provider>
  )
}

export { shoppingContextProvider }