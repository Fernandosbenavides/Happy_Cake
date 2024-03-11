import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" data-bs-theme="dark" fixed="top">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="me-5 text-white">
            🏠 Home
          </Link>
          <Link to="/contact" className="me-5 text-white">
            📓 Contact
          </Link>
        </Nav>
        <Navbar.Brand className="me-0 text-white">🍰 Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
