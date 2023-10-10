import useModal from "components/Modal/useModal"
import CvFile from "assetes/files/Wojtek Fedak CV.pdf"
import {
  Wrapper,
  ButtonWrapper,
  TextWrapper,
  ExperienceWrapper,
} from "./ProjectExperience.styles"
import ExperienceItem from "components/ExperienceItem/ExperienceItem"

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
        <p>
          <span>10.2021 - 09.2022</span> Junior frontend developer at Geeknauts
        </p>
        <p>
          <span>05.2021 - 10.2021</span> intern at Geeknauts
        </p>
      </TextWrapper>
      <ButtonWrapper>
        <button onClick={() => setDropDownExperience(!dropDownExperience)}>
          SHOW MY WORK
        </button>
      </ButtonWrapper>
      <ButtonWrapper>
        <a href={CvFile} download="Wojtek Fedak CV" target="_blank">
          <button
            onClick={() => {
              handleOpenModal()
            }}
          >
            DOWNLOAD MY CV
          </button>
        </a>
      </ButtonWrapper>

      <ExperienceWrapper dropDownExperience={dropDownExperience}>
        {experienceProjects.map((project) => (
          <ExperienceItem
            title={project.title}
            date={project.date}
            role={project.role}
            aboutProject={project.aboutProject}
            technologies={project.technologies}
          />
        ))}
      </ExperienceWrapper>
    </Wrapper>
  )
}

export default ProjectExperience
