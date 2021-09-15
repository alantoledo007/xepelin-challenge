import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 34px;
  text-align: center;
  font-family: Poppins600;
  margin-bottom: 1.25em;
`;

export const P = styled.p`
  font-size: 0.8rem;
  line-height: 28px;
  text-align: center;
  margin-bottom: 2em;
`;

export const FeaturesWrapper = styled(motion.div)`
  transform-style: 'preserve-3d';
  perspective: 1200;
  overflow: 'hidden';
`;

export const FeaturesContainer = styled(motion.div)`
  display: 'flex';
  align-items: 'flex-start';
  justify-content: 'flex-start';
  flex-direction: 'row';
  transform-style: 'preserve-3d';
  height: '100%';
  width: '100%';
  x: ${({ wrapperOffset }) => wrapperOffset};
  y: 0;
`;
