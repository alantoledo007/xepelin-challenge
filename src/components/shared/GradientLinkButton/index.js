import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

export default function GradientLinkButton({ text }) {
  return (
    <Button>
      <Container>
        <Text>{text}</Text>
        <IconArea>
          <FiChevronRight />
        </IconArea>
      </Container>
    </Button>
  );
}

const Button = styled.a`
  background: linear-gradient(93.31deg, #9469fe 0%, #ff79e0 50%, #ffbea7 80%);

  border-radius: 0.5em;
  display: inline-block;

  :hover {
    text-decoration: none;
  }
`;

const Text = styled.span`
  padding: 1.25em;
  display: block;
  font-size: 0.9rem;
`;

const IconArea = styled.span`
  padding: 1.25em;
  display: flex;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  place-items: center;
`;
