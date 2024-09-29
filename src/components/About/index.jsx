import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import arrowIcon from '../../assets/arrow.svg'
import planetIcon from '../../assets/planet.svg'
import golfIcon from '../../assets/golf.svg'

function About() {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.about',
        { x: -1400, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.about',
            start: 'top center',
            toggleActions: 'play pause resume pause'
          }
        }
      );

      gsap.fromTo(
        '.about-content',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: 'power2.inOut',
          delay: 0.5,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top center',
            toggleActions: 'play pause resume pause'
          }
        }
      );
    })
    return () => ctx.revert();
  })

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