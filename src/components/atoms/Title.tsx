import { styled } from "styled-components";

interface TitleType {
  path: string;
}

export default function Title({ path }: TitleType) {
  return (
    <>
      {titleList.map(
        (title) =>
          title.pathname === path && (
            <TitleStyle key={title.id}>{title.tit}</TitleStyle>
          )
      )}
    </>
  );
}

const titleList = [
  { id: 1, tit: "README.md", pathname: "/" },
  { id: 2, tit: "Portfolio", pathname: "/portfolio" },
];

const TitleStyle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
