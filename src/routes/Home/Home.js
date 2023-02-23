import AnimateSection from '../../components/AnimateSection/AnimateSection';
import { Wrapper, NameWrapper, TextWrapper, BackgroundColorWrapper } from 'routes/Home/Home.styles';

const HomePage = () => {
  return (
    <AnimateSection>
      <Wrapper>
        <BackgroundColorWrapper>
          <NameWrapper>
            <p>WOJ</p>
            <p>TEK</p>
          </NameWrapper>
          <TextWrapper>
            <p>
              Cześć! mam na imię Wojtek i liczę, że znajdziesz tutaj coś dla
              siebie
            </p>
            <p>
              Jestem programistą z rocznym doświadczeniem jako frontend developer.
              Zajmuje się tworzeniem oprogramowania web front-endu i aplikacji
              mobilnych z wykorzystaniem biblioteki React i ReactNative.
            </p>
          </TextWrapper>
        </BackgroundColorWrapper>
      </Wrapper>
    </AnimateSection>
  );
};

export default HomePage;
