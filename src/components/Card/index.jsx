/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import './index.css'

function Card(props) {

  const context = useContext(ShoppingContext)
  const showProductPreview = (product) => {
    context.openProductPreview()
    context.setProductPreviewData(product)
  }

  const addProductToCart = (productDetail) => {
    context.setCount(context.count + 1)
    context.setProductsToCart([...context.productsToCart, productDetail])
    context.openCartProducts()
    addedProductsToCart(productDetail.id)
  }

  const addedProductsToCart = (id) => {
    let isProductInCart = context.productsToCart.filter((product) => product.id == id).length > 0
    if (!isProductInCart) {
      return (
        <button
          onClick={() => addProductToCart(props)}
        >
          add to cart</button>
      )
    } else {
      return (
        <button className='!bg-custom-green'>
          added
        </button>
      )
    }
  }

  return (
    <article className="Card" >
      <section className="sup-content__Card">
        <div className="notice">{props.category}</div>
        <img src={props.image} alt="image" />
        <div className="actions">
          {
            addedProductsToCart(props.id)
          }
          <button onClick={() => showProductPreview(props)}>Preview</button>
        </div>
      </section>
      <section className="lower-content__Card">
        <h3>{props.title}</h3>
        <p className="price">${props.price}</p>
      </section>
    </article>
  )
}

export { Card }