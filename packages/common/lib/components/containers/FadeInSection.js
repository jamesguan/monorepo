import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Fader = styled.div`
  &.fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 0.6s ease-out, transform 1.2s ease-out;
    will-change: opacity, visibility;
  }
  
  &.fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;

const FadeInSection = ({ className, children, fadeOnUpScroll, ...props }) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (fadeOnUpScroll || entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }        
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <Fader
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
      ref={domRef}
      { ...props }
    >
      {children}
    </Fader>
  );
};

FadeInSection.propTypes = {
  className: PropTypes.string,
  fadeOnUpScroll: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

FadeInSection.defaultProps = {
  fadeOnUpScroll: true,
  className: '',
};

export default FadeInSection;
