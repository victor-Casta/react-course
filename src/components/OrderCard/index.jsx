import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ShoppingContext } from '../../context'
import  './styles.css'

function OrderCard() {
  const context = useContext(ShoppingContext)
  const urlLocation = useLocation()
  const localUrl = urlLocation.pathname
  const urlParams = new URLSearchParams(urlLocation.search)
  let ProductIdByUrl = urlParams.get('id')
  if(localUrl === '/my-orders/product/last') ProductIdByUrl = context.order.length -1

  return (
    context.order[ProductIdByUrl]?.products.map(item => (
      <article className="order-item" key={item.id}>
        <picture>
          <img src={item.image} alt={item.title} />
        </picture>
        <div className="order-content">
          <h2>{item.title}</h2>
          <p><b>Quantity: </b>{item.quantity}</p>
          <p><b>Price per unit: </b>{item.pricePerUnit}</p>
          <p><b>Total Price:</b> ${item.price}</p>
        </div>
      </article>
    ))
  )
}

export { OrderCard }