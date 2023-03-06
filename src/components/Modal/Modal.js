import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import { Wrapper } from "./Modal.styles"

const modalContainer = document.getElementById("modal-container")

const Modal = ({ isOpen, handleCloseModal, text }) => {
  const modalNode = document.createElement("div")

  useEffect(() => {
    modalContainer.appendChild(modalNode)

    return () => {
      modalContainer.removeChild(modalNode)
    }
  }, [modalNode])

  return ReactDOM.createPortal(
    <Wrapper>
      <p>{text}</p>
      <button onClick={handleCloseModal}>close</button>
    </Wrapper>,
    modalNode
  )
}

export default Modal
