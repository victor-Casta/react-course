import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { IoIosCloseCircleOutline } from "react-icons/io";
import './index.css'

function CartProducts() {

  const context = useContext(ShoppingContext)

  return (
    <aside className={`preview-products ${context.isCartProductsOpen ? 'flex' : 'hidden'}`}>
      <section className="content-container">
        <div className="close">
          <IoIosCloseCircleOutline className='close-icon' onClick={() => context.closeCartProducts()} />
        </div>
      </section>
    </aside>
  )
}

export { CartProducts }