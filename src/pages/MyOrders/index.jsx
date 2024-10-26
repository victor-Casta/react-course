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
        {
          context.order.map((order, index) => {
            <Link to={`/my-orders/${order.id}`} key={index}>
              <OrdersCard totalPrice={order.totalPrice}  totalProducts={order.totalProducts}/>
            </Link>
          })
        }
      </Layout>
    </>
  )
}

export { MyOrders }