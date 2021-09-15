import { keyframes } from 'styled-components';

export const cometTopAnimation = keyframes`
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

export const cometBottomAnimation = keyframes`
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

export const cometRightAnimation = keyframes`
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

export const coinAnimation = keyframes`
  0%{
    transform: translateY(0);
  }

  60%{
    transform: translateY(-2em);
  }

  100%{
    transform: translateY(0);
  }
`;
