/* eslint-disable react/prop-types */
import './styles.css'

function OrdersCard(props) {
  const { index, date, totalPrice, totalProducts } = props

  return (
    <article className='orders-item'>
      <div className="orders__header">
        <div className="details">
          <p className="order__id">
            Order: #{index}
          </p>
          <p className='order__date'>
            {
              date
            }
          </p>
        </div>
        <div className="state">
          <p>Done</p>
        </div>
      </div>
      <div className="orders__contain">
        <p>
          Total price: { totalPrice }
        </p>
        <p>
          Total Products: { totalProducts }
        </p>
      </div>
    </article>
  )
}

export { OrdersCard }