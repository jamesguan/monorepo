import Container from 'react-bootstrap/Container';

import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => (
  <div className="bg-secondary">
    <Nav />
      {children}
    <Footer />
  </ div>
);

export default Layout;
