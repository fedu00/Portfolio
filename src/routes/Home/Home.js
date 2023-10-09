import {
  SectionWrapper,
  TextWrapper,
  BackgroundImage,
  MyImageWrapper,
} from "routes/Home/Home.styles"

import backgroundImage from "../../assetes/pictures/backgroundImage.png"
import myImage from "../../assetes/pictures/aboutMyPicture.png"

const HomePage = ({ homeRef }) => {
  return (
    <SectionWrapper ref={homeRef}>
      <BackgroundImage src={backgroundImage} />
      <TextWrapper>
        <p>Hi, my name is Wojtek</p>
        <p>I am front-end developer</p>
        <p>
          I am a programmer with a year of experience as a frontend developer. For
          more details, please visit my GitHub and if you are interested in whom I
          am, I have also prepared an article about it.
        </p>
      </TextWrapper>
      <MyImageWrapper>
        <img src={myImage} />
      </MyImageWrapper>
    </SectionWrapper>
  )
}

export default HomePage
