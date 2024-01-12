import { SectionWrapper, TextWrapper, MyImageWrapper } from "routes/Home/Home.styles"

import { ReactComponent as BackgroundSVG } from "../../assetes/svgIcons/backgroundIcon/backgroundSVG.svg"
import myImage from "../../assetes/pictures/aboutMyPicture.png"

const HomePage = ({ homeRef }) => {
  return (
    <SectionWrapper ref={homeRef}>
      <BackgroundSVG />
      <TextWrapper>
        <h1>Hi, my name is Wojtek</h1>
        <h4>I am front-end developer</h4>
        <p>
          Hi! On the web you can find me as "fedu". I am a programmer with a year of
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
