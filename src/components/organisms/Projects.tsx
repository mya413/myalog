import { useState } from "react";
import styled from "styled-components";
import Card from "../molecules/Card";
import Select from "../atoms/Select";

export default function Projects() {
  const [selected, setSelected] = useState("default");

  return (
    <ProjectsStyle>
      <Select selected={selected} setSelected={setSelected} />
      <div>
        <Card selected={selected} />
      </div>
    </ProjectsStyle>
  );
}

const ProjectsStyle = styled.div`
  & > div:last-child {
    height: 550px;
    overflow: auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    & > div:last-child {
      height: 460px;
    }
  }

  @media screen and (max-width: 768px) {
    & > div:last-child {
      height: 520px;
    }
  }
`;
