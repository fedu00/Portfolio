import { Wrapper } from 'components/project/Project.styles';

const Project = ({ image, title, handleOpenProjects }) => {
  return (
    <Wrapper
      title={title}
      onClick={() => handleOpenProjects(title)}
    >
      <img src={image} />
    </Wrapper>
);
};

export default Project;
