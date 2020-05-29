import SignupComponent from "components/auth/SignupComponent"
import Layout from "components/Layout"
import { Container } from "react-bootstrap"

export default () => {
  return (
    <Layout>
      <Container>
      <SignupComponent/>
      </Container>
    </Layout>
  )
}

