import { Layout } from "../../components/Layout"
import { Navbar } from "../../components/Navbar"
import { PrincipalContent } from "../../components/PrincipalContent"
import { Description } from "../../components/Description"

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <PrincipalContent />
        <Description />
      </Layout>
    </>
  )
}

export { Home }