import { useState } from "react";
import styled from "styled-components";
import Card from "../molecules/Card";
import Select from "../atoms/Select";
import { ProjectsDataProps } from "@/data/projectsData";

export default function Projects() {
  const [selected, setSelected] = useState("default");
  const [selectedCard, setSelectedCard] = useState<ProjectsDataProps[]>([]);

  return (
    <>
      <ProjectsStyle>
        <Select
          selected={selected}
          setSelected={setSelected}
          setSelectedCard={setSelectedCard}
        />
        <div>
          <Card
            selected={selected}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
        </div>
      </ProjectsStyle>
    </>
  );
}

const ProjectsStyle = styled.div`
  & > div:last-child {
    height: 580px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    & > div:last-child {
      height: 470px;
    }
  }

  @media screen and (max-width: 768px) {
    & > div:last-child {
      height: 520px;
    }
  }
`;
