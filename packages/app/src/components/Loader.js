import styled from 'styled-components';

const CircleContainer = styled.div`
  align-items: center;
  height: 90vh;
  display: fixed;
  justify-content: center;
`;

const Circle = styled.div`
  {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
    animation: animate 1.2s linear infinite;
  }

  @keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  }

  span:nth-child(1) {
    filter: blur(5px);
  }

  span:nth-child(2) {
    filter: blur(10px);
  }

  span:nth-child(3) {
    filter: blur(25px);
  }

  span:nth-child(4) {
    filter: blur(50px);
  }

  :after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #f1f1f1;
    border: solid white 10px;
    border-radius: 50%;
  }
`;

const Loader = () => (
  <CircleContainer> 
    <Circle className="loader">
      <span />
      <span />
      <span />
      <span />
    </Circle>
  </CircleContainer>
 
);

export default Loader;