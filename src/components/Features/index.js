import { RECORD_STATES } from '@/constants';
import getSimulator from '@/utils/getSimulator';
import { features_mock } from '@/utils/mocks';
import { useEffect, useMemo, useRef, useState } from 'react';
import Spinner from '@/components/shared/Spinner';
import Feature from './Feature';
import {
  FeaturesWrapper,
  FeaturesContainer,
  P,
  Title,
  Wrapper,
} from './styled';
import Container from '../shared/Container';
import { motion } from 'framer-motion';

export default function Features() {
  const [features, setFeatures] = useState(RECORD_STATES.LOADING);

  const rContainer = useRef(null);
  const [current, setCurrent] = useState(currentPage);
  const [originOffset, setOriginOffset] = useState({
    x: 0,
    y: 0,
  });

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    getSimulator(features_mock).then((data) => {
      setFeatures(data);
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>¿Cómo lo hacemos realidad?</Title>
        <P>
          Nuestro modelo de riesgos evalúa en segundos una operación, lo que nos
          permite financiar en el mismo día.
        </P>
        <FeaturesWrapper>
          {features === RECORD_STATES.LOADING ? (
            <Spinner />
          ) : (
            features.map((item) => <Feature key={item.id} {...item} />)
          )}
        </FeaturesWrapper>
        <Carousel />
      </Container>
    </Wrapper>
  );
}

const Carousel = () => {
  return (
    <VirtualizedPage>
      {({ index }) => {
        const modulo = index % images.length;
        const imageIndex = modulo < 0 ? images.length + modulo : modulo;
        return (
          <img
            draggable={false}
            alt="Mountain"
            style={{ width: '100%' }}
            src={images[imageIndex]}
          />
        );
      }}
    </VirtualizedPage>
  );
};

const Page = ({ index, renderPage }) => {
  const child = useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
      {child}
    </motion.div>
  );
};

const range = [-1, 0, 1];

const images = [
  'https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=640',
  'https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=640',
  'https://unsplash.com/photos/phIFdC6lA4E/download?force=true&w=640',
];

export const VirtualizedPage = ({ children }) => {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflowX: 'hidden',
      }}>
      {range.map((rangeValue) => {
        return (
          <Page
            key={rangeValue + index}
            index={rangeValue + index}
            renderPage={children}
          />
        );
      })}
    </motion.div>
  );
};

const currentPage = 0;
