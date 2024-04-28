import styled from "styled-components";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function FeIcons() {
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
    icon: <FaReact />,
    title: "React",
    color: "react",
  },
  {
    id: 2,
    icon: <TbBrandNextjs />,
    title: "Next.js",
    color: "next",
  },
  {
    id: 3,
    icon: <SiRedux />,
    title: "Redux",
    color: "redux",
  },
  {
    id: 4,
    icon: <SiReactquery />,
    title: "Tanstack-query",
    color: "tsq",
  },
  {
    id: 5,
    icon: <RiJavascriptFill />,
    title: "JavaScript",
    color: "js",
  },
  {
    id: 6,
    icon: <BiLogoTypescript />,
    title: "TypeScript",
    color: "ts",
  },
  {
    id: 7,
    icon: <FaHtml5 />,
    title: "HTML5",
    color: "html",
  },
  {
    id: 8,
    icon: <FaCss3Alt />,
    title: "CSS3",
    color: "css",
  },
  {
    id: 9,
    icon: <SiStyledcomponents />,
    title: "Styled-components",
    color: "sc",
  },
  {
    id: 10,
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    color: "tc",
  },
];

const IconStyle = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 15px;
  transition: all 0.5s;
  margin-bottom: 20px;

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
      &.react,
      &.tc {
        & > svg {
          color: #00ccff;
        }
      }

      &.next {
        & > svg {
          color: #000;
        }
      }

      &.redux {
        & > svg {
          color: #764abc;
        }
      }

      &.tsq {
        & > svg {
          color: #ef4544;
        }
      }

      &.js {
        & > svg {
          color: #f7df1c;
        }
      }

      &.ts {
        & > svg {
          color: #007acc;
        }
      }

      &.html {
        & > svg {
          color: #c23910;
        }
      }

      &.css {
        & > svg {
          color: #006ebd;
        }
      }

      &.sc {
        & > svg {
          color: #e58d7f;
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
