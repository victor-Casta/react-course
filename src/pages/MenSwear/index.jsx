import { useContext } from "react"
import { ShoppingContext } from "../../context"
import { Layout } from "../../components/Layout"
import { Card } from '../../components/Card'
import { Navbar } from "../../components/Navbar"

function MenSwear() {
  const context = useContext(ShoppingContext)

  return (
    <>
      <Navbar />
      <Layout>
        <h2 className="mb-10 mt-3 font-fraunces font-black text-3xl uppercase text-black">Men Swear</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-3 justify-center items-center">
          {
            context.products?.filter(item => item.subCategory.includes('menswear'))
            .map(item =>
              <Card
                price={item.price}
                title={item.name}
                key={item.id}
                image={item.image}
                category={item.category}
                description={item.description}
                id={item.id}
                pricePerUnit={item.pricePerUnit} />
            )
          }
        </div>
      </Layout>
    </>
  )
}


export { MenSwear }