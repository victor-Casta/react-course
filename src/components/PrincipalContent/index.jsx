import { useRef, useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import hat1 from '../../assets/hat1.png'
import hat2 from '../../assets/hat2.png'
import model1 from '../../assets/model1.jpg'
import { IoArrowDown } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import './index.css'

function PrincipalContent() {

  const clickContainer = useRef(null)
  const pointer = useRef(null)

  useEffect(() => {
    const container = clickContainer.current;
    const pointerElement = pointer.current;

    if (container && pointerElement) {
      const handleMouseMove = (e) => {
        const containerRect = container.getBoundingClientRect();

        const x = e.clientX - containerRect.left;
        const y = e.clientY - containerRect.top;

        pointerElement.style.left = `${x}px`;
        pointerElement.style.top = `${y}px`;
      };

      container.addEventListener('mousemove', handleMouseMove);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        '.message',
        { x: -1400, scale: 0, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 2, ease: 'power1.inOut' },
        '=='
      )
      tl.fromTo(
        '.arrow, .learn, .contact, .puntero',
        { x: -1400, scale: 0, opacity: 0, rotate: 180 },
        { x: 0, scale: 1, opacity: 1, duration: 2, rotate: 0, ease: 'power1.inOut' },
        '+'
      )
      tl.fromTo(
        '.container-states',
        { y: 900, scale: 0, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power1.inOut' },
        '=='
      )
      tl.fromTo(
        '.second-content',
        { x: 1400, scale: 0, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: 2, ease: 'power1.inOut' },
        '=='
      )
    });

    return () => ctx.revert();
  });

  return (
    <section className="principal-content">
      <div className="first-content">
        <div className="message">
          <div>
            <div className="title-container">
              <p>for</p>
              <svg className='arrow' width="151" height="16" viewBox="0 0 151 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150.707 8.70711C151.098 8.31658 151.098 7.68342 150.707 7.29289L144.343 0.928932C143.953 0.538408 143.319 0.538408 142.929 0.928932C142.538 1.31946 142.538 1.95262 142.929 2.34315L148.586 8L142.929 13.6569C142.538 14.0474 142.538 14.6805 142.929 15.0711C143.319 15.4616 143.953 15.4616 144.343 15.0711L150.707 8.70711ZM0 9H150V7H0V9Z" fill="black" />
              </svg>
            </div>
            <p>everyone but</p>
            <p>notanyone</p>
          </div>
          <div>
            <p>
              We stablish relasionships with our boutiques, to make <br />
              sure each is vetted for a stress-free shopping experience
            </p>
          </div>
        </div>
        <div className="container-states">
          <div className="rip-stop">
            <img src={hat1} alt="person model" width={200} />
            <p>#rip stop</p>
          </div>
          <div className="insulated">
            <img src={hat2} alt="person model" width={200} />
            <p>#insulated</p>
          </div>
        </div>
      </div>
      <div className="second-content">
        <a href='/menswear' className="click__section" ref={clickContainer}>
          <div className="puntero" ref={pointer}>
            shop <br />
            Now
          </div>
        </a>
        <img src={model1} alt="model" />
        <div className="links">
          <a href="/discover" className='learn'>
            <p>learn more</p>
            <div>
              <IoArrowDown size={13} color='#fff' />
            </div>
          </a>
          <a href="/contact" className='contact'>
            <p>Contact us</p>
            <div>
              <TfiEmail size={13} color='#000' />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export { PrincipalContent }