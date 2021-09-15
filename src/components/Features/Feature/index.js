import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function Feature({ img, title, description, link }) {
  return (
    <Container>
      <a href={link}>
        <img src={img} />
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link}>Explorar</a>
    </Container>
  );
}

export const Container = styled(motion.div)`
  display: 'grid';
  grid-auto-columns: 'auto';
  grid-auto-rows: 'auto';
  grid-auto-flow: 'column';
  transform-style: 'preserve-3d';
  gap: 20px;
  width: 'auto';
  x: ${({ draggableOffset }) => draggableOffset};
`;
