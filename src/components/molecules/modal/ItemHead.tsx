import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProjectsDataProps } from "@/data/projectsData";

interface ItemHeadProps {
  card: ProjectsDataProps;
  isFocused: number;
  refDev: React.RefObject<HTMLDivElement>;
  refTech: React.RefObject<HTMLDivElement>;
  refTrouble: React.RefObject<HTMLDivElement>;
  refReview: React.RefObject<HTMLDivElement>;
  scrollHandler: (ref: React.RefObject<HTMLDivElement>, idx: number) => void;
}

export default function ItemHead({
  card,
  isFocused,
  refDev,
  refTech,
  refTrouble,
  refReview,
  scrollHandler,
}: ItemHeadProps) {
  return (
    <ItemHeadStyle>
      <div>
        {card.link ? (
          <Link to={card.link} target="_blank">
            {card.title}
          </Link>
        ) : (
          <h2>
            {card.title}
            <span>[ Private Repository 입니다 🥲 ]</span>
          </h2>
        )}
        <div>
          <h5>{`${card.startDate.year}.${card.startDate.month} ~ ${card.endDate.year}.${card.endDate.month}`}</h5>
          {!card.dev.team ? null : (
            <h5>
              FE : {card.dev.team.front}명 / BE : {card.dev.team.back}명
            </h5>
          )}
        </div>
      </div>
      <h3>{card.descDetail}</h3>
      {card.isDeploy && card.deploy !== "" ? (
        <h4>
          🔗{" "}
          <Link to={card.deploy} target="_blank">
            {card.deploy}
          </Link>
        </h4>
      ) : card.deploy === "" ? null : (
        <h4 className="undeploy">
          🔗 <span>{card.deploy}</span> 유지비용 이슈로 인해 현재 서버가 닫힌
          상태입니다.
        </h4>
      )}

      <ItemHeadTabStyle>
        {contentsTitle.map((title, idx) => (
          <div
            key={title}
            className={idx === isFocused ? "active" : ""}
            onClick={() =>
              scrollHandler(
                idx === 0
                  ? refDev
                  : idx === 1
                  ? refTech
                  : idx === 2
                  ? refTrouble
                  : refReview,
                idx
              )
            }
          >
            {title}
          </div>
        ))}
      </ItemHeadTabStyle>
    </ItemHeadStyle>
  );
}

const contentsTitle = [
  "Development",
  "Tech Stack",
  "Trouble Shooting",
  "Review",
];

const ItemHeadStyle = styled.section`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  padding: 20px 0;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & > a,
    & > h2 {
      font-size: 30px;
      font-weight: 600;
      color: #222;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      & > span {
        font-size: 14px;
        font-weight: 500;
        color: #222;
      }
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 5px;

      & > h5 {
        font-size: 12px;
        font-weight: 300;
        background-color: #222;
        color: #fff;
        padding: 5px 10px;
        border-radius: 10px;
        text-align: center;
      }
    }
  }

  & > h3,
  & > h4 {
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #eee;
    color: #222;
    line-height: 1.4;
  }

  & > h4 {
    margin-top: 10px;
    color: #999;
    & > a {
      color: #222;
      text-decoration-line: underline;
      text-decoration-thickness: 1.5px;
      font-weight: 500;
    }
  }

  & > h4.undeploy > span {
    font-weight: 400;
    color: #999;
    text-decoration-line: line-through;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;

    & > div {
      & > a,
      & > h2 {
        font-size: 20px;

        & > span {
          font-size: 12px;
        }
      }

      & > div {
        & > h5 {
          font-size: 10px;
        }
      }
    }

    & > h3 {
      font-size: 12px;
    }

    & > h4 {
      margin-top: 5px;
      font-size: 12px;
    }
  }
`;

const ItemHeadTabStyle = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;

  & > div {
    position: relative;
    padding: 20px 15px;
    font-size: 14px;
    color: #bbb;
    cursor: pointer;
    transition: all 0.1s;
    font-weight: 500;
  }

  & > div.active {
    color: #222;
    transition: all 0.1s;
  }

  & > div.active::after {
    position: absolute;
    bottom: 0px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    border-bottom: 2px solid #222;
  }

  @media screen and (max-width: 768px) {
    border-bottom: 0;
    & > div {
      padding: 15px 10px;
      font-size: 12px;
    }
  }
`;
