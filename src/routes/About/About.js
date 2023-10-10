import mySecondPicture from "../../assetes/pictures/mySecondPicture.png"
import { Wrapper, TextWrapper, MyImageWrapper } from "routes/About/About.styles"

const About = ({ aboutRef }) => {
  return (
    <Wrapper ref={aboutRef}>
      <MyImageWrapper>
        <img src={mySecondPicture} />
      </MyImageWrapper>

      <TextWrapper>
        <h1>Wojtek Fedak</h1>
        <p>
          In my work, I enjoy creating application logic along with optimizing it
          while making sure my work is readable, by others. In addition to
          programming skills I also have an eye for detail, creating creative
          graphics and user-friendly UI. In my work I create an application using
          React and React Native with their libraries. For graphic design projects I
          use Figma. I have over a year of commercial experience behind me, and I am
          constantly improving my skills as a developer.
        </p>
        <p>
          In my free time, I also deal with designing, drawing, watching automotive
          curiosities, exercising or enjoying, a computer games or series.
        </p>
      </TextWrapper>
    </Wrapper>
  )
}

export default About
