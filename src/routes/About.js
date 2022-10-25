import "./../styles/globalStyles.css";
import myPicture from "../assetes/pictures/aboutMyPicture.png";
import AnimateSection from "../components/AnimateSection";

const About = () => {
  return (
    <AnimateSection>
      <div className="main-section">
        <div className="about-container">
          <div
            className="image-backgroun-about"
            style={{ backgroundImage: `url(${myPicture})` }}
          ></div>
          <div>
            <div className="pink text-wraper">
              &lt;h2&gt;
              <h2 className="text">Wojtek</h2>
              &lt;/h2&gt;
            </div>

            <div className="orange about-text-wrapper">
              &lt;p&gt;
              <p className="text">
                Jestem 28-latkiem, który odnalazł się w roli programisty.
                Zacząłem od Frontendu ponieważ od dzieciaka zajmowałem się
                rysowaniem i często zwracam uwagę na wizualne aspekty, w
                zasadzie wszystkiego więc to był decydujący czynnik od czego
                zacząć programowanie. Oprócz programowania i rysowania mam masę
                zainteresowań, gram w gry komputerowe, choduje rośliny uwielbiam
                zwierzęta i jak mam tylko okazje to zawsze poświęcę im uwagę,
                skończyłem szkołę sportową i fizjoterapię więc sport był u mnie
                zawsze. Lubię również motoryzację od lat ją śledzę i szukam
                swojego wymarzonego auta.
              </p>
              &lt;/p&gt;
            </div>
          </div>
        </div>
      </div>
    </AnimateSection>
  );
};

export default About;
