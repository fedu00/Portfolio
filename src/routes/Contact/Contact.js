import AnimateSection from "../../components/AnimateSection/AnimateSection"
import React from "react"
import {
  SectionWrapper,
  Wrapper,
  ContentWrapper,
} from "routes/Contact/Contact.styles"
import useModal from "components/Modal/useModal"

const Contact = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fedakwojciech@gmail.com")
    handleOpenModal()
  }
  return (
    <AnimateSection>
      <SectionWrapper>
        <Wrapper>
          {isOpen ? (
            <Modal
              handleCloseModal={handleCloseModal}
              text="Successful email copying!"
            />
          ) : null}
          <ContentWrapper>
            <p>Don't be shy, send a message!</p>
            <button onClick={handleCopyEmail}>click to copy email</button>
          </ContentWrapper>
        </Wrapper>
      </SectionWrapper>
    </AnimateSection>
  )
}

export default Contact
