import { Layout } from "../../components/Layout"
import { Navbar } from "../../components/Navbar"
import { PrincipalContent } from "../../components/PrincipalContent"
import { Description } from "../../components/Description"
import { TabProducts } from "../../components/TabProducts"

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <PrincipalContent />
        <Description />
        <TabProducts />
      </Layout>
    </>
  )
}

export { Home }