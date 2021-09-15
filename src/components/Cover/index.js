import GradientLinkButton from '../shared/GradientLinkButton';
import ImgCover from '@/assets/images/cover.png';
import ImgCometBottom from '@/assets/images/comet-bottom.svg';
import ImgCometTop from '@/assets/images/comet-top.svg';
import ImgCometRight from '@/assets/images/comet-right.png';
import ImgCoin from '@/assets/images/coin.svg';
import {
  CometBottom,
  CometRight,
  CometTop,
  Container,
  Img,
  P,
  Title,
  Wrapper,
  Coin,
} from './styled';

export default function Cover() {
  return (
    <Wrapper>
      <Container>
        <CometBottom src={ImgCometBottom} />
        <CometRight src={ImgCometRight} />
        <CometTop src={ImgCometTop} />
        <Coin src={ImgCoin} />
        <div>
          <Title>Financia el sueño de tu empresa</Title>
          <P>
            Nuestro modelo de riesgos evalúa en segundos una operación, lo que
            nos
            <br />
            permite financiar en el mismo día.
          </P>
          <GradientLinkButton text="Empieza a financiarte" />
        </div>
        <div>
          <Img src={ImgCover} alt="Empieza a financiarte - Xepelin" />
        </div>
      </Container>
    </Wrapper>
  );
}
