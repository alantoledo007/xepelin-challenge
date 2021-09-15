const { default: styled } = require('styled-components');

const Container = styled.div`
  padding: 0 1.75em;
  max-width: ${({ theme }) => theme.sizes.desktop};
  margin: 0 auto;
`;

export default Container;
