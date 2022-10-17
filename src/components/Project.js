import "../styles/projectStyles.css";

const Project = ({ image, title, handleOpenProjects }) => {
  return (
    <div
      className="projectComponentContainer"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => handleOpenProjects(title)}
    >
      <h1 className="project-title">{title}</h1>
    </div>
  );
};

export default Project;
