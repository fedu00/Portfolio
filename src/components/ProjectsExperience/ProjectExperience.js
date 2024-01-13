import useModal from "components/Modal/useModal"
import CvFile from "assetes/files/Wojciech Fedak CV.pdf"
import {
  Wrapper,
  TextWrapper,
  ExperienceWrapper,
  ExperienceContainer,
} from "./ProjectExperience.styles"
import ExperienceItem from "components/ExperienceItem/ExperienceItem"
import CustomButton from "components/CustomButton/CustomButton"
import { ReactComponent as DownloadSVG } from "assetes/svgIcons/downloadIcon.svg"
import { useRef, useEffect, useState } from "react"

const ProjectExperience = ({
  setDropDownExperience,
  dropDownExperience,
  experienceProjects,
}) => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()
  const [experienceConteinterHeight, setExperienceContainerHeight] = useState(0)
  const experienceContainerRef = useRef(null)

  const handleExperienceWrapperHeight = () => {
    setExperienceContainerHeight(experienceContainerRef.current.offsetHeight)
  }
  useEffect(() => {
    window.addEventListener("resize", handleExperienceWrapperHeight)
    return () => {
      window.removeEventListener("resize", handleExperienceWrapperHeight)
    }
  }, [])

  return (
    <Wrapper>
      {isOpen ? (
        <Modal
          icon={<DownloadSVG />}
          handleCloseModal={handleCloseModal}
          text="Thank you for downloading my CV. I hope my qualifications meet your expectations, and we will be in touch soon!"
        />
      ) : null}
      <TextWrapper>
        <h1>Where I've worked?</h1>
        <div>
          <p>
            <span>10.2021-09.2022</span>
          </p>
          <p> Junior frontend developer at Geeknauts</p>
        </div>
        <div>
          <p>
            <span>05.2021-10.2021</span>
          </p>
          <p>intern at Geeknauts</p>
        </div>
      </TextWrapper>
      <CustomButton
        text="DOWNLOAD MY CV"
        download="Wojtek Fedak CV"
        onClick={handleOpenModal}
        adress={CvFile}
      />
      <CustomButton
        buttonMinWidth={"210px"}
        text="SHOW MY WORK"
        onClick={() => {
          handleExperienceWrapperHeight()
          setDropDownExperience(!dropDownExperience)
        }}
      />
      <ExperienceContainer
        dropDownExperience={dropDownExperience}
        experienceConteinterHeight={experienceConteinterHeight}
      >
        <ExperienceWrapper
          dropDownExperience={dropDownExperience}
          ref={experienceContainerRef}
        >
          {experienceProjects.map(
            ({ title, date, role, aboutProject, technologies }) => {
              return (
                <ExperienceItem
                  title={title}
                  date={date}
                  role={role}
                  aboutProject={aboutProject}
                  technologies={technologies}
                  key={title}
                />
              )
            }
          )}
        </ExperienceWrapper>
      </ExperienceContainer>
    </Wrapper>
  )
}

export default ProjectExperience
