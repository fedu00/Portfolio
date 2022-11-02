import "./../styles/globalStyles.css";
import AnimateSection from "../components/AnimateSection";

const HomePage = () => {
  return (
    <AnimateSection>
      <div className="main-section">
        <div className="pink text-wraper">
          &lt;h1&gt;
          <p className="text">
            Cześć! mam na imię Wojtek i liczę, że znajdziesz tutaj coś dla
            siebie
          </p>
          &lt;/h1&gt;
        </div>
        <div className="orange text-wraper">
          &lt;p&gt;
          <p className="text">
            Jestem programistą z rocznym doświadczeniem jako frontend developer.
            Zajmuje się tworzeniem oprogramowania web front-endu i aplikacji
            mobilnych z wykorzystaniem biblioteki React i ReactNative.
          </p>
          &lt;/p&gt;
        </div>
      </div>
    </AnimateSection>
  );
};

export default HomePage;
