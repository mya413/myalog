import styled from "styled-components";
import FeIcons from "@/components/molecules/skills/FeIcons";
import ToolIcons from "@/components/molecules/skills/ToolIcons";

export default function Skills() {
  return (
    <SkillsStyle>
      <div>
        <span>Front-end</span>
        <FeIcons />
      </div>
      <div>
        <span>Tool</span>
        <ToolIcons />
      </div>
    </SkillsStyle>
  );
}

const SkillsStyle = styled.div`
  height: 580px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    display: flex;
    flex-direction: column;
    & > span {
      display: block;
      font-size: 16px;
      font-weight: 600;
      color: #222;
      text-align: center;
      background-color: #eee;
      padding: 10px;
      margin-bottom: 5px;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 410px;
  }

  @media screen and (max-width: 768px) {
    height: 430px;
  }
`;
