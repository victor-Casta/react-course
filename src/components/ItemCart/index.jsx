/* eslint-disable react/prop-types */
import './index.css'
import { CgClose } from "react-icons/cg";

function ItemCart(props) {
  const { imageUrl, title, price } = props

  return (
    <article className='Item-Cart'>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>{price}</p>
        <div className="quantity">
          <button>-</button>
          <span className="quantity-value">1</span>
          <button>+</button>
        </div>
      </div>
      <div className="remove">
        <CgClose />
      </div>
    </article>
  )
}

export { ItemCart }