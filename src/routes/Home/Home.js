import AnimateSection from "../../components/AnimateSection/AnimateSection"
import {
  SectionWrapper,
  NameWrapper,
  TextWrapper,
  BorderWrapper,
} from "routes/Home/Home.styles"

const HomePage = () => {
  return (
    <AnimateSection>
      <SectionWrapper>
        <BorderWrapper>
          <NameWrapper>
            <p>Hi, my name is</p>
            <p>Wojtek</p>
          </NameWrapper>
          <TextWrapper>
            <p>I am front-end developer</p>
            <p>
              I am a programmer with a year of experience as a frontend developer.
              For more details, please visit my GitHub and if you are interested in
              whom I am, I have also prepared an article about it.
            </p>
          </TextWrapper>
        </BorderWrapper>
      </SectionWrapper>
    </AnimateSection>
  )
}

export default HomePage
