import './index.css'
import arrowIcon from '../../assets/arrow.svg'
import planetIcon from '../../assets/planet.svg'
import golfIcon from '../../assets/golf.svg'

function About() {
  return (
    <section className='about'>
      <picture>
        <img src="https://images.garmentory.com/images/6140451/xl/Cold-Season-USN-Utility-Hat-Charcoal-20211117022540.jpg?1637115943" alt="Model" />
        <div className="link">
          <a href="#">
            <p>learn more</p>
            <img src={arrowIcon} alt="Arrow icon" />
          </a>
        </div>
      </picture>
      <div className='about-content'>
        <h2>
          We´re changing the way things get made
        </h2>
        <div className="content">
          <div className="first-content">
            <div className="title__content">
              <span>
                <img src={planetIcon} alt="Planet icon" />
              </span>
              <h3>sustainability</h3>
            </div>
            <p>
              Our hats are made from recycled materials, using eco-friendly manufacturing processes, and sourced from sustainable, local suppliers.
            </p>
          </div>
          <div className="second-content">
            <div className="title__content">
              <span>
                <img src={golfIcon} alt="Golf icon" />
              </span>
              <h3>mission</h3>
            </div>
            <p>
              We strive to create products that not only look great but also have a positive impact on the environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }