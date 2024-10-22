import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import  './styles.css'

function MyOrders() {

  const context = useContext(ShoppingContext)

  return (
    <>
      <Navbar />
      <Layout>
        <div className="orderList">
        {
          context.order.slice(-1)[0]?.products.map(item => (
            <article className="order-item" key={item.id}>
            <picture>
              <img src={item.image} alt={item.title} />
            </picture>
            <div className="order-content">
              <h2>{item.title}</h2>
              <p className='price'>Price: ${item.price}</p>
              <p>{item.description}</p>
            </div>
          </article>
          ))
        }
        </div>
      </Layout>
    </>
  )
}

export { MyOrders }