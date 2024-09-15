import './index.css'

function Card(props) {
  return(
    <article className="Card">
      <section className="sup-content__Card">
        <div className="notice">get of 20%</div>
        <img src={props.image} alt="image" />
        <div className="actions">
          <button>add to cart</button>
          <button>buy now</button>
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