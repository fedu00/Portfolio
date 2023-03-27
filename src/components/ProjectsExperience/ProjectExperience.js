import useModal from "components/Modal/useModal"
import CvFile from "assetes/files/Wojtek Fedak CV.pdf"
import {
  Wrapper,
  ButtonWrapper,
  BorderWrapper,
  ExperienceWrapper,
  ExperienceButton,
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
      <ButtonWrapper>
        <a href={CvFile} download="Wojtek Fedak CV" target="_blank">
          <button
            onClick={() => {
              handleOpenModal()
            }}
          >
            download my CV
          </button>
        </a>
      </ButtonWrapper>
      <BorderWrapper>
        <h2>Where I’ve worked?</h2>
        <p>10.2021 - 09.2022 Junior frontend developer at Geeknauts</p>
        <p>05.2021 - 10.2021 intern at Geeknauts</p>
        <p>
          While working at Geeknauts, I created websites and mobile applications
          using the React and React Native libraries. In addition to programming, I
          dealt with mock-ups and graphics using the Figma program.
        </p>
        <ExperienceButton>
          <button onClick={() => setDropDownExperience(!dropDownExperience)}>
            show my work in Geeknauts
          </button>
        </ExperienceButton>
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
      </BorderWrapper>
    </Wrapper>
  )
}

export default ProjectExperience
