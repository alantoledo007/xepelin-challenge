const { default: styled } = require('styled-components');

const Container = styled.div`
  padding: 3.75em 1.75em 0 1.75em;
  max-width: ${({ theme }) => theme.sizes.desktop};
  margin: 0 auto;
  @media ${({ theme }) => theme.devices.desktop} {
    padding-top: 7.5em;
  }
`;

export default Container;
