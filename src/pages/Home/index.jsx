import { Layout } from "../../components/Layout"
import { Navbar } from "../../components/Navbar"
import { PrincipalContent } from "../../components/PrincipalContent"
import { Description } from "../../components/Description"
import { TabProducts } from "../../components/TabProducts"
import { About } from "../../components/About"
import { Video } from "../../components/Video"

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <PrincipalContent />
        <Description />
        <TabProducts />
        <About />
        <Video />
      </Layout>
    </>
  )
}

export { Home }