import styled from "styled-components";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";

export default function ToolIcons() {
  return (
    <IconStyle>
      {iconList.map((icon) => (
        <li key={icon.id}>
          <span className={icon.color}>{icon.icon}</span>
          <span>{icon.title}</span>
        </li>
      ))}
    </IconStyle>
  );
}

const iconList = [
  {
    id: 1,
    icon: <FaGitAlt />,
    title: "Git",
    color: "git",
  },
  {
    id: 2,
    icon: <FaGithub />,
    title: "Github",
    color: "gh",
  },
  {
    id: 3,
    icon: <CgFigma />,
    title: "Figma",
    color: "figma",
  },
];

const IconStyle = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  transition: all 0.5s;

  & > li {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 20px;
    height: 200px;
    gap: 10px;

    & > span:first-child {
      &.git {
        & > svg {
          color: #f05033;
        }
      }

      &.gh {
        & > svg {
          color: #000;
        }
      }

      &.figma {
        & > svg {
          color: #ff4140;
        }
      }

      & > svg {
        width: 100%;
        font-size: 60px;
      }
    }

    & > span:last-child {
      font-size: 16px;
      font-weight: 500;
      color: #222;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    & > li {
      height: 100px;

      & > span:first-child {
        & > svg {
          font-size: 30px;
        }
      }

      & > span:last-child {
        font-size: 14px;
      }
    }
  }
`;
