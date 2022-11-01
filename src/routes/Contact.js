import "../styles/globalStyles.css";
import AnimateSection from "../components/AnimateSection";
import emailjs from "emailjs-com";
import React from "react";
import githubSvg from "../assetes/svgIcons/githubSVG.svg";
import facebookSvg from "../assetes/svgIcons/facebookSVG.svg";
import instaSvg from "../assetes/svgIcons/instaSVG.svg";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i39dfpf",
        "template_pnr2kkm",
        e.target,
        "lz4ctJuQ0el1LaV8s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <AnimateSection>
      <div className="main-section">
        <form onSubmit={sendEmail}>
          <div className="form-field">
            <label>Imię</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="imię"
            />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="email"
            />
          </div>
          <div className="form-field">
            <label>Temat</label>
            <input
              type="text"
              name="subject"
              className="form-input"
              placeholder="temat"
            />
          </div>
          <div className="form-field">
            <label>Wiadomość</label>
            <textarea
              name="message"
              className="form-input"
              placeholder="wiadomość"
            />
          </div>

          <input
            type="submit"
            value="Wyślij wiadomość"
            className="input-submit"
          />
        </form>
        <div className="icons-container">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/wojciechfedak/"
          >
            <img className="contact-ikon" src={instaSvg} alt="logo" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/wojtek.fedak/"
          >
            <img className="contact-ikon" src={facebookSvg} alt="logo" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/fedu00">
            <img className="contact-ikon" src={githubSvg} alt="logo" />
          </a>
        </div>
      </div>
    </AnimateSection>
  );
};

export default Contact;
