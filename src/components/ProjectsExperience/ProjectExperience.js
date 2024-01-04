import useModal from "components/Modal/useModal"
import CvFile from "assetes/files/Wojciech Fedak CV.pdf"
import { Wrapper, TextWrapper, ExperienceWrapper } from "./ProjectExperience.styles"
import ExperienceItem from "components/ExperienceItem/ExperienceItem"
import CustomButton from "components/CustomButton/CustomButton"

const ProjectExperience = ({
  setDropDownExperience,
  dropDownExperience,
  experienceProjects,
}) => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()
  return (
    <Wrapper>
      {isOpen ? (
        <Modal
          handleCloseModal={handleCloseModal}
          text="You have downloaded my CV!"
        />
      ) : null}
      <TextWrapper>
        <h2>Where I’ve worked?</h2>
        <div>
          <p>
            <span>10.2021 - 09.2022</span>
          </p>
          <p> Junior frontend developer at Geeknauts</p>
        </div>
        <div>
          <p>
            <span>05.2021 - 10.2021</span>
          </p>
          <p>intern at Geeknauts</p>
        </div>
      </TextWrapper>
      <CustomButton
        buttonMinWidth={"210px"}
        text="SHOW MY WORK"
        onClick={() => setDropDownExperience(!dropDownExperience)}
      />
      <CustomButton
        text="DOWNLOAD MY CV"
        download="Wojtek Fedak CV"
        onClick={handleOpenModal}
        adress={CvFile}
      />
      <ExperienceWrapper dropDownExperience={dropDownExperience}>
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
    </Wrapper>
  )
}

export default ProjectExperience
