import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../../context'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { OrdersCard } from '../../components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingContext)

  return (
    <>
      <Navbar />
      <Layout>
      <div className="back-icon__container mb-10 flex gap-3 items-center">
          <h2 className='font-noto'>My orders</h2>
        </div>
        {
          context.order.map((order, index) => (
            <Link to={`/my-orders/product/?id=${index}`} key={index}>
              <OrdersCard totalPrice={order.totalPrice}  totalProducts={order.totalProducts} index={index} date={order.date} />
            </Link>
          ))
        }
      </Layout>
    </>
  )
}

export { MyOrders }