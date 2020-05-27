import Header from "./Header"
import { Container } from "react-bootstrap"

const Layout = ({children}) => {
  return (
    <Container fluid>
    <Header/>
      {children}
    <h2>Footer</h2>
    </Container>
  )
}

export default Layout
