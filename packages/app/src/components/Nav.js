import Button from 'react-bootstrap/Button';
import Navigation from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Nav = ({ signedIn, ...props }) => {
  return (
    <Navbar
      fill
      bg="dark"
      collapseOnSelect
      expand="lg"
      defaultActiveKey="/"
      variant="dark"
      {...props}
    >
      <Container>
        <Navbar.Brand href="#home">
          <div>Hi</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          {
            signedIn && (
                <Navbar.Text className="d-sm-block">
                  Signed in as: <a href="#login">James Guan</a>
                </Navbar.Text>
          )}
          {
            !signedIn && (
              <>
                <Navigation.Link href="/login">Login</Navigation.Link>
                <Navigation.Link href="/signup">Sign Up</Navigation.Link>
              </>
            )
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Nav;