import styled from "styled-components";
import Card from "../molecules/Card";

export default function Projects() {
  return (
    <ProjectsStyle>
      <Card />
    </ProjectsStyle>
  );
}

const ProjectsStyle = styled.div`
  height: 550px;
  overflow: auto;

  @media screen and (max-width: 1024px) {
    height: 460px;
  }

  @media screen and (max-width: 768px) {
    height: 520px;
  }
`;
