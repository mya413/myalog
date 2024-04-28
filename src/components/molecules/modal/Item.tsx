import { useState } from "react";
import { ProjectsDataProps } from "@/data/projectsData";
import styled from "styled-components";
import ItemHead from "./ItemHead";
import ItemBody from "./ItemBody";
import { useObserver } from "@/hook/useObserver";

interface ItemProps {
  card: ProjectsDataProps;
}

export default function Item({ card }: ItemProps) {
  const [isFocused, setIsFocused] = useState(0);
  const refDev = useObserver(0, setIsFocused);
  const refTech = useObserver(1, setIsFocused);
  const refTrouble = useObserver(2, setIsFocused);
  const refReview = useObserver(3, setIsFocused);

  const scrollHandler = (ref: React.RefObject<HTMLDivElement>, idx: number) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsFocused(idx);
  };

  return (
    <ItemStyle>
      <p>!!! 프로젝트 타이틀을 클릭하면 Github Repository로 이동됩니다.</p>
      <ItemHead
        card={card}
        isFocused={isFocused}
        refDev={refDev}
        refTech={refTech}
        refTrouble={refTrouble}
        refReview={refReview}
        scrollHandler={scrollHandler}
      />
      <ItemBody
        card={card}
        refDev={refDev}
        refTech={refTech}
        refTrouble={refTrouble}
        refReview={refReview}
      />
    </ItemStyle>
  );
}

const ItemStyle = styled.section`
  position: relative;
  height: 65%;

  & > p {
    font-size: 12px;
    padding: 10px 0;
    color: #fe5f58;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    height: 75%;
  }

  @media screen and (max-width: 440px) {
    height: 65%;
  }

  @media screen and (max-width: 375px) {
    height: 45%;
  }
`;
