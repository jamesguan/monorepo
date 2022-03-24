import BootstrapNav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const data1 = [
  { x: '2020-01-01', y: 50 },
  { x: '2020-01-02', y: 10 },
  { x: '2020-01-03', y: 20 },
];

const data2 = [
  { x: '2020-01-01', y: 30 },
  { x: '2020-01-02', y: 40 },
  { x: '2020-01-03', y: 80 },
];

const accessors = {
  xAccessor: d => d.x,
  yAccessor: d => d.y,
};

const Container = styled.div`

`;

const Nav = ({ ...props }) => {
  return (
    <BootstrapNav fill variant="tabs" defaultActiveKey="/" {...props} >
      <BootstrapNav.Item>
        <BootstrapNav.Link href="/">Dashboard</BootstrapNav.Link>
      </BootstrapNav.Item>
    </BootstrapNav>
  )
};

export default Nav;