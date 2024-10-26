import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { OrderCard } from '../../components/OrderCard'
import { IoIosArrowBack } from "react-icons/io"

function MyOrder() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="back-icon__container mb-10 flex gap-3 items-center">
          <Link to={'/my-orders'}>
            <IoIosArrowBack size={30} />
          </Link>
          <h2 className='font-noto'>My order</h2>
        </div>
        <div className="orderList">
          <OrderCard />
        </div>
      </Layout>
    </>
  )
}

export { MyOrder }