import {
  ExperienceItemWrapper,
  Title,
  ContentWrapper,
} from "./ExperienceItem.styles"

const ExperienceItem = ({ date, title, aboutProject, role, technologies }) => {
  return (
    <ExperienceItemWrapper>
      <Title>
        <p>{date}</p>
        <p>{title}</p>
      </Title>
      <ContentWrapper>
        <p>{aboutProject}</p>
        <p>{role}</p>
        <p>{technologies}</p>
      </ContentWrapper>
    </ExperienceItemWrapper>
  )
}

export default ExperienceItem
