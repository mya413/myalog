import styled from "styled-components";
import Icons from "../atoms/Icons";

export default function Skills() {
  return (
    <SkillsStyle>
      <Icons />
    </SkillsStyle>
  );
}

const SkillsStyle = styled.div`
  height: 550px;
  overflow: auto;

  @media screen and (max-width: 1024px) {
    height: 460px;
  }

  @media screen and (max-width: 768px) {
    height: 520px;
  }
`;
