/* eslint-disable react/prop-types */
import  './styles.css'

function OrdersCard(props) {
  const { totalPrice, totalProducts } = props

  return (
    <article className='order-item'>
      <span>{new Date().toLocaleDateString()}</span>
      <p>{totalPrice}</p>
      <p>{totalProducts}</p>
    </article>
  )
}

export { OrdersCard }