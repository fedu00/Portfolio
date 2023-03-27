import myPicture from "../../assetes/pictures/aboutMyPicture.png"
import AnimateSection from "../../components/AnimateSection/AnimateSection"
import { Wrapper, TextWrapper, Title } from "routes/About/About.styles"

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
            Hi! I am a Front-end developer, I write my applications in the React and
            React Native libraries. In addition to programming skills, I also have an
            eye for detail, which makes me great at the front. I have over a year of
            commercial experience behind me, and I am constantly improving my skills
            as a developer.
          </p>
          <p>
            In my free time, I also deal with designing, drawing, watching automotive
            curiosities, exercising or immersing himself in a computer game or
            series.
          </p>
        </TextWrapper>
        <img src={myPicture} />
      </Wrapper>
    </AnimateSection>
  )
}

export default About
