import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { IoIosCloseCircleOutline } from "react-icons/io";
import './index.css'
import { ItemCart } from "../ItemCart";

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
      </section>
    </aside>
  )
}

export { CartProducts }