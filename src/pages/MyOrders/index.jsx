import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { OrderCard } from '../../components/OrderCard'

function MyOrders() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="orderList">
          <OrderCard />
        </div>
      </Layout>
    </>
  )
}

export { MyOrders }