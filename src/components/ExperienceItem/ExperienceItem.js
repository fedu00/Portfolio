import { ExperienceItemWrapper, Date, ContentWrapper } from "./ExperienceItem.styles"

const ExperienceItem = ({ date, title, aboutProject, role, technologies }) => {
  return (
    <ExperienceItemWrapper>
      <Date>{date}</Date>
      <ContentWrapper>
        <p>{title}</p>
        <p>{aboutProject}</p>
        <p>{role}</p>
        <p>{technologies}</p>
      </ContentWrapper>
    </ExperienceItemWrapper>
  )
}

export default ExperienceItem
