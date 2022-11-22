import "./projectDetails.scss";
import cross from "../../assetes/svgIcons/cross.svg";

const ProjectDetails = ({ adress, setShow, image, title, text }) => {
  return (
    <div className="projectDetails-offset">
      <div className="projectDetails-container">
        <img
          src={cross}
          alt="logo"
          className="cross-icon"
          onClick={() => {
            setShow(false);
          }}
        />
        <div
          className="image-container"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="text-container">
          <h1>{title}</h1>
          <a target="_blank" rel="noreferrer" href={adress}>
            {adress}
          </a>
          {text.map((element) => (
            <p className="project-text">{element}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
