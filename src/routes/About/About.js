import "./about.scss";
import myPicture from "../../assetes/pictures/aboutMyPicture.png";
import AnimateSection from "../../components/AnimateSection";

const About = () => {
  return (
    <AnimateSection>
      <div className="about-section">
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
                W wieku 26 lat zacząłem swoją naukę programowania. Postawiłem na
                front-end, ponieważ od zawsze zajmowałem się
                malowaniem/rysowaniem i zwracam uwagę na wizualne aspekty. Teraz
                po 2 latach nauki w tym ponad rok pracy komercyjnej świetnie się
                odnajduję, tworząc projekty z wykorzystaniem bibliotek React
                owych oraz rozpocząłem naukę animacji. Oprócz programowania
                często oglądam filmy motoryzacyjne i szukam wymarzonego auta,
                wyjdę poćwiczyć lub zanurzę się w grę, lub serial.
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
