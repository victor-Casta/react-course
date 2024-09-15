import { Card } from '../Card'

function TabProducts() {
  return (
    <section className="TabProducts">
      <div className="title__tab">
        <h2>
          shop by essentials
        </h2>
        <div className="categories__tab">
          <div className="item">
            <p>all</p>
            <span>23</span>
          </div>
          <div className="item">
            <p>summer coll</p>
            <span>12</span>
          </div>
          <div className="item">
            <p>new ariv</p>
            <span>10</span>
          </div>
          <div className="item">
            <p>best sell</p>
            <span>4</span>
          </div>
          <div className="item">
            <p>flash</p>
            <span>23</span>
          </div>
        </div>
      </div>
      <div className="products-list__tab">
        <Card price="12" title="cardigan" image="" />
      </div>
    </section>
  )
}

export { TabProducts }