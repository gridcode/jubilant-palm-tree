import {
  Navbar,
  Nav,
} from "react-bootstrap";
import Link from "next/link";
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="row">
      <Navbar.Brand href="#home">
        {process.env.NEXT_PUBLIC_APPNAME}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/signin" passHref>
            <Nav.Link>Sign in</Nav.Link>
          </Link>
          <Link href="/signup" passHref>
            <Nav.Link>Sign up</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
