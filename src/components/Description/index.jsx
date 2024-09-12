import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import { GiPolarStar } from "react-icons/gi";
import './index.css'

function Description() {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.registerPlugin(ScrollTrigger)

      gsap.to('.Description', {
        scrollTrigger: {
          trigger: '.Description',
          toggleActions: 'restart pause resume pause'
        },
        scale: 1.1
      });

      gsap.to('.star', {
        rotate: 180,
        repeat: Infinity,
        duration: 2,
        ease: 'power1.inOut'
      })
    });

    return () => ctx.revert();
  });

  return (
    <section className="Description">
      <div className="photo1">
        <img src={photo1} alt="hat" />
      </div>
      <div className="photo2">
        <img src={photo2} alt="hat" />
      </div>
      <div className="photo3" >
        <img src={photo3} alt="hat" />
      </div>
      <p>
        Puremod Clothing for Elevated Everyday  Life. Styles change <span><GiPolarStar className='star' />with seasons</span> united  by the liberating essence of travel-inspired  lightheartedness
      </p>
    </section>
  )
}

export { Description }