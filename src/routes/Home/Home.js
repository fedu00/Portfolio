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
          Hi! On the web you can find it as "fedu". I am a programmer with a year of
          experience as a frontend developer, occasionally I also create graphic
          designs and mock-ups. Below you can find more information about me and my
          work.
        </p>
      </TextWrapper>
      <MyImageWrapper>
        <img src={myImage} />
      </MyImageWrapper>
    </SectionWrapper>
  )
}

export default HomePage
