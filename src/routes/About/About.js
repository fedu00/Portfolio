import { useState, useEffect } from "react"
import mySecondPicture from "../../assetes/pictures/mySecondPicture.png"
import axios from "axios"
import {
  SectionWrapper,
  AboutWrapper,
  TextWrapper,
  MyImageWrapper,
} from "routes/About/About.styles"
import ProjectsStack from "components/ProjectsStack/ProjectsStack"
import ProjectExperience from "components/ProjectsExperience/ProjectExperience"

const API_TOKEN = "1ab3a70712337882e49d01c85666d9"

const About = ({ aboutRef }) => {
  const [experienceProjects, setExperienceProjects] = useState([])
  const [dropDownExperience, setDropDownExperience] = useState(false)
  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
          {
            allExperiences{
              date
              title
              aboutProject
              role
              technologies
            }
                          }
      `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setExperienceProjects(data.allExperiences.reverse())
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <SectionWrapper ref={aboutRef}>
      <AboutWrapper>
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
            React and React Native with their libraries. For graphic design projects
            I use Figma. I have over a year of commercial experience behind me, and I
            am constantly improving my skills as a developer.
          </p>
          <p>
            In my free time, I also deal with designing, drawing, watching automotive
            curiosities, exercising or enjoying, a computer games or series.
          </p>
        </TextWrapper>
      </AboutWrapper>
      <ProjectsStack />
      <ProjectExperience
        experienceProjects={experienceProjects}
        setDropDownExperience={setDropDownExperience}
        dropDownExperience={dropDownExperience}
      />
    </SectionWrapper>
  )
}

export default About
