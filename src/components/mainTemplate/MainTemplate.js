import { MainTemplateWrapper } from "./MainTemplate.styles"
import Navbar from "components/navbar/Navbar"
// import SocialMediaBar from "components/socialMediaBar/SocialMediaBar"

const MainTemplate = ({ children }) => {
  return (
    <MainTemplateWrapper>
      <Navbar />

      {children}
      <SocialMediaBar />
    </MainTemplateWrapper>
  )
}

export default MainTemplate
