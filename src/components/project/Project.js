import "./project.scss";

const Project = ({ image, title, handleOpenProjects }) => {
  return (
    <div
      className="project-container"
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => handleOpenProjects(title)}
    >
      <h1 className="project-title">{title}</h1>
    </div>
  );
};

export default Project;
