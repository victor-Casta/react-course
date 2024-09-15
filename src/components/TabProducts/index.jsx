import { Card } from '../Card'
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css'

function TabProducts() {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.TabProducts',
        { x: 900, opacity: 0, scale: 0},
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.TabProducts',
            toggleActions: 'play pause resume pause'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="TabProducts">
      <div className="title__tab">
        <h2 className='title'>
          shop by essentials
        </h2>
        <div className="categories__tab">
          <div className="item">
            <p>all</p>
            <p>23</p>
          </div>
          <div className="item">
            <p>summer coll</p>
            <p>12</p>
          </div>
          <div className="item">
            <p>new ariv</p>
            <p>10</p>
          </div>
          <div className="item">
            <p>best sell</p>
            <p>4</p>
          </div>
        </div>
      </div>
      <div className="products-list__tab">
        <Card price="12" title="cardigan" image="https://images.pexels.com/photos/4287126/pexels-photo-4287126.jpeg " />
        <Card price="12" title="cardigan" image="https://images.pexels.com/photos/4287126/pexels-photo-4287126.jpeg " />
        <Card price="12" title="cardigan" image="https://images.pexels.com/photos/4287126/pexels-photo-4287126.jpeg " />
        <Card price="12" title="cardigan" image="https://images.pexels.com/photos/4287126/pexels-photo-4287126.jpeg " />
        <Card price="12" title="cardigan" image="https://images.pexels.com/photos/4287126/pexels-photo-4287126.jpeg " />
      </div>
    </section>
  )
}

export { TabProducts }