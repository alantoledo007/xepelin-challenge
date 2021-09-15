import styled, { keyframes } from 'styled-components';
import SharedContainer from '../shared/Container';

const cometTopAnimation = keyframes`
  0%{
    transform: translateY(0) scale(1);
  }

  60%{
    transform: translateY(2em) scale(.8);
  }

  100%{
    transform: translateY(0) scale(1);
  }
`;

const cometBottomAnimation = keyframes`
  0%{
    transform: translateY(0) scale(1);
  }

  60%{
    transform: translateY(-2em) scale(.8);
  }

  100%{
    transform: translateY(0) scale(1);
  }
`;

const cometRightAnimation = keyframes`
  0%{
    transform: translateX(0) scale(1);
  }

  60%{
    transform: translateX(-2em) scale(.8);
  }

  100%{
    transform: translateX(0) scale(1);
  }
`;

const CometBase = styled.img`
  position: absolute;
`;

export const CometBottom = styled(CometBase)`
  bottom: 0;
  animation: ${cometBottomAnimation} 10s ease-in-out infinite;
`;

export const CometTop = styled(CometBase)`
  top: -8em;
  right: 31.5em;
  animation: ${cometTopAnimation} 10s ease infinite;
  @media ${({ theme }) => theme.devices.mobile} {
    right: 31%;
  }
`;

export const CometRight = styled(CometBase)`
  bottom: 8em;
  right: 0;
  animation: ${cometRightAnimation} 10s ease-out infinite;
  @media ${({ theme }) => theme.devices.mobile} {
    bottom: 6.5em;
  }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding-top: 7.25em;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: -999999;
`;

export const Container = styled(SharedContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 667px;
  height: 100%;
  @media ${({ theme }) => theme.devices.mobile} {
    padding-bottom: 15em;
  }
`;

export const Title = styled.h1`
  font-family: Poppins600;
  font-size: 3.6rem;
  line-height: 1.3;
  margin-bottom: 0.5em;
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 2;
  margin-bottom: 1.5em;
`;

export const Img = styled.img`
  display: none;
  @media ${({ theme }) => theme.devices.desktop} {
    margin-bottom: -0.95em; //esto es para que quede exacto al diseño, ya que el somobreado está en la imagen.
    height: 100%;
    display: inline-block;
  }
`;
