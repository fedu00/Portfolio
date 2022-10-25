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
            po wiecej szczegułów zapraszam do swojego githuba a jeśli ciekawi
            cię kim jestem to też przygotowałem na ten temat artykuł.
          </p>
          &lt;/p&gt;
        </div>
      </div>
    </AnimateSection>
  );
};

export default HomePage;
