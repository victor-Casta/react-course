import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import  './styles.css'

function OrderCard() {
  const context = useContext(ShoppingContext)

  return (
    context.order.slice(-1)[0]?.products.map(item => (
      <article className="order-item" key={item.id}>
        <picture>
          <img src={item.image} alt={item.title} />
        </picture>
        <div className="order-content">
          <h2>{item.title}</h2>
          <p><b>Quantity: </b>{item.quantity}</p>
          <p><b>Precio por unidad: </b>{item.pricePerUnit}</p>
          <p><b>Total Price:</b> ${item.price}</p>
        </div>
      </article>
    ))
  )
}

export { OrderCard }