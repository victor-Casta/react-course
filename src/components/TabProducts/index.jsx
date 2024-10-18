import { Card } from '../Card'
import { useLayoutEffect, useState, useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
const BASE_URL_API = import.meta.env.VITE_BASE_API_URL

function TabProducts() {
  const [products, setProducs] = useState(null)
  const [categories, setCategories] = useState(null)
  const [tabValue, setTabValue] = useState(null)

  useEffect(() => {
    try {
      fetch(`${BASE_URL_API}/products`)
        .then(response => response.json())
        .then(data => setProducs(data))
    } catch (error) {
      console.error(error)
    }
    try {
      fetch(`${BASE_URL_API}/categories`)
        .then(response => response.json())
        .then(data => setCategories(data))
    } catch (error) {
      console.error(error)
    }
  }, [])

  const totalProducts  = () => {
    let allProducts = 0
    categories?.map((item) => {
      allProducts += item.products.length
    })
    return allProducts
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.TabProducts',
        { x: 900, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.TabProducts',
            start: 'top center',
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
            <p onClick={(event) => setTabValue(event.target.textContent)}>all</p>
            <p>{totalProducts() > 0 ? totalProducts() : 0}</p>
          </div>
          {
            categories?.map((item) => {
              return (
                <div className="item" key={item.id} >
                  <p onClick={(event) => setTabValue(event.target.textContent)}>{item.name}</p>
                  <p>{item.products.length}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="products-list__tab">
        {
          tabValue === null || tabValue === 'all' ? products?.map((item) => {
            return <Card price={item.price} title={item.name} key={item.id} image={item.image} category={item.category} description={item.description} id={item.id} pricePerUnit={item.pricePerUnit}/>
          }) : products?.filter(product => product.category === tabValue)?.map((item) => {
            return <Card price={item.price} title={item.name} key={item.id} image={item.image} category={item.category} description={item.description} id={item.id} pricePerUnit={item.pricePerUnit}/>
          })
        }
      </div>
    </section>
  )
}

export { TabProducts }