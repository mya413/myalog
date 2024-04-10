// import { styled } from "styled-components";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import styled from "styled-components";

export default function Icons() {
  return (
    <IconStyle>
      {iconList.map((icon) => (
        <li key={icon.id}>{icon.icon}</li>
      ))}
    </IconStyle>
  );
}

const iconList = [
  {
    id: 1,
    icon: <FaReact />,
  },
  {
    id: 2,
    icon: <RiJavascriptFill />,
  },
  {
    id: 3,
    icon: <BiLogoTypescript />,
  },
  {
    id: 4,
    icon: <FaHtml5 />,
  },
  {
    id: 5,
    icon: <FaCss3Alt />,
  },
  { id: 6, icon: <SiStyledcomponents /> },
];

const IconStyle = styled.ul``;
