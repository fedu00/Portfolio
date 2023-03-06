import AnimateSection from "../../components/AnimateSection/AnimateSection"
import emailjs from "emailjs-com"
import React from "react"
import {
  SectionWrapper,
  TextWrapper,
  Wrapper,
  Text,
  FormWrapper,
} from "routes/Contact/Contact.styles"
import useModal from "components/Modal/useModal"

const Contact = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_i39dfpf", "template_pnr2kkm", e.target, "lz4ctJuQ0el1LaV8s")
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <AnimateSection>
      <SectionWrapper>
        <Wrapper>
          {isOpen ? (
            <Modal
              handleCloseModal={handleCloseModal}
              text="Will reply to email soon!"
            />
          ) : null}
          <TextWrapper>
            <p>Don't be shy, send a message!</p>
          </TextWrapper>
          <FormWrapper>
            <form onSubmit={sendEmail}>
              <div className="form-field">
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="name"
                />
              </div>
              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="email"
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="subject"
                />
              </div>
              <div className="form-field">
                <textarea
                  name="message"
                  className="form-input"
                  placeholder="message"
                />
              </div>

              <input
                type="submit"
                onClick={handleOpenModal}
                value="send a message!"
                className="input-submit"
              />
            </form>
          </FormWrapper>
        </Wrapper>
      </SectionWrapper>
    </AnimateSection>
  )
}

export default Contact
