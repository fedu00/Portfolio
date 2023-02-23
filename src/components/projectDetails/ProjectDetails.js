import cross from '../../assetes/svgIcons/cross.svg';
import { WrapperOffset, Wrapper, ImmageWrapper, TextWrapper } from 'components/projectDetails/ProjectDetails.styles'

const ProjectDetails = ({ adress, setShow, image, title, text }) => {
  return (
    <WrapperOffset>
      <Wrapper>
        <img
          src={cross}
          alt="logo"
          className="cross-icon"
          onClick={() => {
            setShow(false);
          }}
        />
        <ImmageWrapper
          image={image}
        ></ImmageWrapper>
        <TextWrapper>
          <h1>{title}</h1>
          <a target="_blank" rel="noreferrer" href={adress}>
            {adress}
          </a>
          {text.map((element) => (
            <p>{element}</p>
          ))}
        </TextWrapper>
      </Wrapper>
    </WrapperOffset>
  );
};

export default ProjectDetails;
