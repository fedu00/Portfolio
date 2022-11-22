import "./projectDetails.scss";

const ProjectDetails = ({ adres, setShow, image, title, secondText }) => {
  return (
    <div
      className="projectDetails-offset"
      onClick={() => {
        setShow(false);
      }}
    >
      <div className="projectDetails-container">
        <div
          className="image-container"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="text-container">
          <h1>{title}</h1>
          <a target="_blank" rel="noreferrer" href={adres}>
            {adres}
          </a>
          <p className="project-text">{secondText}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
