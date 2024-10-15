import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { IoIosCloseCircleOutline } from "react-icons/io"
import './index.css'

function ProductsPreview() {

  const context = useContext(ShoppingContext)

  const addProductToCart = (productDetails) => {
    context.setCount(context.count + 1)
    context.setProductsToCart([...context.productsToCart, productDetails])
    context.closeProductPreview()
    context.openCartProducts()
  }

  return (
    <aside className={`preview-products ${context.isProductPreviewOpen ? 'flex' : 'hidden'}`}>
      <section className="content-container">
        <div className="close">
          <IoIosCloseCircleOutline className='close-icon' onClick={() => context.closeProductPreview()} />
        </div>
        <picture>
          <img src={context.productPreviewData.image} alt={context.productPreviewData.title} />
        </picture>
        <div className="product-details">
          <h2>{context.productPreviewData.title}</h2>
          <p>Price: ${context.productPreviewData.price}</p>
          <p>{context.productPreviewData.description}</p>
          <button onClick={() => addProductToCart(context.productPreviewData)}>Add to cart</button>
        </div>
      </section>
    </aside>
  )
}

export { ProductsPreview }