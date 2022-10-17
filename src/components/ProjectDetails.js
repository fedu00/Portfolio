import "../styles/projectsStyles.css";

const ProjectDetails = ({ text, setShow, image }) => {
  return (
    <div
      className="test"
      onClick={() => {
        setShow(false);
      }}
    >
      <div className="orange-div">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="text-container">
          <h1>tytuł</h1>
          <p>{text}</p>
          <p>tekst drugi</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
