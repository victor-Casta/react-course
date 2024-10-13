/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import './index.css'

function Card(props) {

  const context = useContext(ShoppingContext)
  const showProductPreview = (product) => {
    context.openProductPreview()
    context.setProductPreviewData(product)
  }

  return(
    <article className="Card" >
      <section className="sup-content__Card">
        <div className="notice">{props.category}</div>
        <img src={props.image} alt="image" />
        <div className="actions">
          <button
          onClick={() => context.setCount(context.count + 1)}
          >
            add to cart</button>
          <button onClick={() => showProductPreview(props)}>Preview</button>
        </div>
      </section>
      <section className="lower-content__Card">
        <h3>{props.title}</h3>
        <p className="price">${props.price}</p>
      </section>
    </article>
  )
}

export { Card }