import "./../styles/homeStyles.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="welcomeSection">
        &lt;h1&gt;
        <p className="paragraphContainer">
          Cześć! mam na imię Wojtek i liczę, że znajdziesz tutaj coś dla siebie
        </p>
        &lt;/h1&gt;
      </div>
      <div className="aboutMeSection">
        &lt;p&gt;
        <p className="paragraphContainer">
          Jestem programistą z rocznym doświadczeniem jako frontend developer.
          po wiecej szczegułów zapraszam do swojego githuba a jeśli ciekawi cię
          kim jestem to też przygotowałem na ten temat artykuł.
        </p>
        &lt;/p&gt;
      </div>
    </div>
  );
};

export default HomePage;
