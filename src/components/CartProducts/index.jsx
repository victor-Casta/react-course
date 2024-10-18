import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ItemCart } from "../ItemCart";
import totalPrice from "../../utils/total_price";
import './index.css'

function CartProducts() {

  const context = useContext(ShoppingContext)

  const handleRemoveProduct = (id) => {
    const filteredProducts = context.productsToCart.filter((product) => product.id !== id)
    context.setProductsToCart(filteredProducts)
  }

  return (
    <aside className={`preview-products ${context.isCartProductsOpen ? 'flex' : 'hidden'}`}>
      <section className="content-container">
        <div className="close">
          <IoIosCloseCircleOutline className='close-icon' onClick={() => context.closeCartProducts()} />
        </div>
        <div className="products-list">
          {
            context.productsToCart.map((product) => (
              <ItemCart
                id={product.id}
                key={product.id}
                imageUrl={product.image}
                title={product.title}
                price={product.price}
                handleRemoveProduct={handleRemoveProduct}
              />
            ))
          }
        </div>
        <div className="total-price">
          <p>Total Price: ${totalPrice(context.productsToCart)}</p>
        </div>
      </section>
    </aside>
  )
}

export { CartProducts }