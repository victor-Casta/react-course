/* eslint-disable react/prop-types */
import { useContext, useState, useRef, useEffect } from 'react'
import { ShoppingContext } from '../../context'
import { CgClose } from "react-icons/cg"
import './index.css'

function ItemCart(props) {
  const context = useContext(ShoppingContext)
  const restButton = useRef()
  const { id, imageUrl, title, price, handleRemoveProduct } = props
  const [cuantityProducts, setCuantityProducts] = useState(1)

  useEffect(() => {
    validateQuantity(cuantityProducts)
    changePriceToQuantity(id)
  }, [cuantityProducts])

  const changePriceToQuantity = (id) => {
    const newProductDetail = context.productsToCart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          price: item.pricePerUnit * cuantityProducts
        }
      }
      return item
    })
    context.setProductsToCart(newProductDetail)
  }

  const validateQuantity = (quantity) => {
    if (quantity <= 1) {
      restButton.current.disabled = true
    } else {
      restButton.current.disabled = false
    }
  }

  return (
    <article className='Item-Cart'>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>{price.toFixed(2)}</p>
        <div className="quantity">
          <button
            onClick={() => setCuantityProducts(cuantityProducts - 1)}
            ref={restButton}
          >-</button>
          <span className="quantity-value">{cuantityProducts}</span>
          <button
            onClick={() => setCuantityProducts(cuantityProducts + 1)}
          >+</button>
        </div>
      </div>
      <div className="remove">
        <CgClose onClick={() => handleRemoveProduct(id)} />
      </div>
    </article>
  )
}

export { ItemCart }
