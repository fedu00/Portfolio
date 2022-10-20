import "../styles/aboutStyles.css";
import "./../styles/homeStyles.css";
import myPicture from "../assetes/pictures/aboutMyPicture.png";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div
          className="backgroun-about"
          style={{ backgroundImage: `url(${myPicture})` }}
        ></div>
        <div className="content-about">
          &lt;h1&gt;
          <h1>Wojtek</h1>
          &lt;/h1&gt;
          <div className="paragraphContainer">
            &lt;p&gt;
            <p className="paragraph">
              Jestem 28-latkiem, który odnalazł się w roli programisty. Zacząłem
              od Frontendu ponieważ od dzieciaka zajmowałem się rysowaniem i
              często zwracam uwagę na wizualne aspekty, w zasadzie wszystkiego
              więc to był decydujący czynnik od czego zacząć programowanie.
              Oprócz programowania i rysowania mam masę zainteresowań, gram w
              gry komputerowe, choduje rośliny uwielbiam zwierzęta i jak mam
              tylko okazje to zawsze poświęcę im uwagę, skończyłem szkołę
              sportową i fizjoterapię więc sport był u mnie zawsze. Lubię
              również motoryzację od lat ją śledzę i szukam swojego wymarzonego
              auta.
            </p>
            &lt;/p&gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
