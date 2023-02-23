import myPicture from '../../assetes/pictures/aboutMyPicture.png';
import AnimateSection from '../../components/AnimateSection/AnimateSection';
import { Wrapper, TextWrapper, Title } from 'routes/About/About.styles';

const About = () => {
  return (
    <AnimateSection>
      <Wrapper>
        <TextWrapper>
          <Title>
            <h1>Wojtek</h1>
            <h1>Fedak</h1>
          </Title>
              <p>
              Cześć! Jestem Front-end developerem, swoje aplikacje piszę w bibliotece React i React Native. Oprócz zdolności programistycznych mam też oko do szczegółów przez co świetnie sprawuje się właśnie na froncie. Mam za sobą już ponad rok doświadczenia komercyjnego i cały czas podnoszę swoje umiejętności jak developer.
              </p>
              <p>
              W wolnej chwili zajmuje się również projektowaniem, rysowaniem, oglądam ciekawostki motoryzacyjne, ćwiczę lub zanurzam się grę komputerową albo serial.
              </p>
        </TextWrapper>
        <img src={myPicture} />
      </Wrapper>
    </AnimateSection>
  );
};

export default About;
