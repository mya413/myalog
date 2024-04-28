import { useState } from "react";
import styled from "styled-components";
import Projects from "../organisms/Projects";
// import Skills from "../organisms/Skills";

export default function Tab() {
  const [isActive, setIsActive] = useState(tabList[0].id);

  const tabClickHandler = (id: number) => {
    setIsActive(id);
  };
  return (
    <TabStyle>
      <ul>
        {tabList.map((tab) => (
          <li
            key={tab.id}
            className={tab.id === isActive ? "active" : ""}
            onClick={() => tabClickHandler(tab.id)}
          >
            {tab.tab}
          </li>
        ))}
      </ul>
      {tabList.map((tab) => (
        <div key={tab.id}>{tab.id === isActive ? tab.component : null}</div>
      ))}
    </TabStyle>
  );
}

const tabList = [
  { id: 1, tab: "Projects", component: <Projects /> },
  // { id: 2, tab: "Skills", component: <Skills /> },
];

const TabStyle = styled.div`
  & > ul {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    & > li {
      background-color: #eee;
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
      color: #222;
      margin-right: 10px;
    }
    & > li:last-child {
      margin-right: 0;
    }
    & > li.active {
      background-color: #222;
      color: #eee;
    }
  }

  @media screen and (max-width: 768px) {
    & > ul {
      & > li {
        font-size: 12px;
      }
    }
  }
`;
