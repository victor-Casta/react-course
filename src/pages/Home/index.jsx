import { Layout } from "../../components/Layout"
import { Navbar } from "../../components/Navbar"
import { PrincipalContent } from "../../components/PrincipalContent"

function Home() {
  return (
    <>
      <Navbar />
      <Layout>
        <PrincipalContent />
      </Layout>
    </>
  )
}

export { Home }