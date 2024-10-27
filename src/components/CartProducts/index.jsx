import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingContext } from "../../context"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { ItemCart } from "../ItemCart"
import totalPrice from "../../utils/total_price"
import './index.css'

function CartProducts() {

  const context = useContext(ShoppingContext)

  const handleRemoveProduct = (id) => {
    const filteredProducts = context.productsToCart.filter((product) => product.id !== id)
    context.setProductsToCart(filteredProducts)
  }

  const handleCheckout = () => {
    let orderToAdd = {
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      products: context.productsToCart,
      totalPrice: totalPrice(context.productsToCart),
      totalProducts: context.productsToCart.length
    }
    context.setOrder([...context.order, orderToAdd])
    context.setProductsToCart([])
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
        <div className="buy-product">
          <div className="total">
            <p>Total:</p>
            <p>${totalPrice(context.productsToCart)}</p>
          </div>
          <Link to={'/my-orders/product/last'}>
            <button onClick={() => {
              handleCheckout()
              context.closeCartProducts()
            }}>Checkout</button>
          </Link>
        </div>
      </section>
    </aside>
  )
}

export { CartProducts }