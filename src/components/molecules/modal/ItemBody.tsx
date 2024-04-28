import styled from "styled-components";
import { ProjectsDataProps } from "@/data/projectsData";

interface ItemBodyProps {
  card: ProjectsDataProps;
  refDev: React.RefObject<HTMLDivElement>;
  refTech: React.RefObject<HTMLDivElement>;
  refTrouble: React.RefObject<HTMLDivElement>;
  refReview: React.RefObject<HTMLDivElement>;
}

export default function ItemBody({
  card,
  refDev,
  refTech,
  refTrouble,
  refReview,
}: ItemBodyProps) {
  return (
    <ItemBodyStyle id="scrollArea">
      <div>
        <h4 ref={refDev}>:: Development</h4>
        {card.dev.feat.map((feature, idx) => (
          <>
            <p key={feature.title}>{`${idx + 1}. ${feature.title}`}</p>
            <ul>
              {feature.desc.length !== 0 &&
                feature.desc.map((item) => <li key={item}>{`‣ ${item}`}</li>)}
            </ul>
          </>
        ))}
      </div>
      <div>
        <h4 ref={refTech}>:: Tech Stack</h4>
        <ul>
          {card.skills.concat(card.dev.skillStack).map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
          {card.dev.skillDesc.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </ul>
      </div>
      <div>
        <h4 ref={refTrouble}>:: Trouble Shooting</h4>
        {card.dev.issue.map((content, idx) => (
          <>
            <p key={content.problem}>{`${idx + 1}. ${content.problem}`}</p>
            <span key={content.cause}>{`${content.cause}`}</span>
            <ul>
              {content.try.length !== 0 &&
                content.try.map((item, idx) => (
                  <li>
                    <span>‣ 해결시도방법 {idx + 1} :</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </>
        ))}
      </div>
      <div>
        <h4 ref={refReview}>:: Review</h4>
        {card.dev.insight.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
    </ItemBodyStyle>
  );
}

const ItemBodyStyle = styled.section`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 10px;

  & > div {
    color: #222;
    margin-bottom: 40px;

    & > h4 {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    & > p {
      font-size: 18px;
      font-weight: 500;
      margin: 30px 0 10px 0;
    }
  }

  & > div:first-child,
  & > div:nth-child(3) {
    & > ul {
      display: flex;
      flex-direction: column;
      gap: 10px;

      & > li {
        line-height: 1.6;
        color: #999;
        font-size: 14px;
        display: flex;
        flex-direction: column;

        & > span:first-child {
          color: #222;
          font-weight: 500;
        }
        & > span:last-child {
          padding-left: 10px;
        }
      }
    }
  }

  & > div:nth-child(2) {
    & > ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 5px;

      & > li {
        font-size: 14px;
        background-color: #eee;
        color: #222;
        border-radius: 10px;
        padding: 5px 10px;
        font-weight: 500;
        margin-bottom: 10px;
      }

      & > p {
        width: 100%;
        color: #222;
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 10px;
        font-size: 14px;
        line-height: 1.6;
      }
    }
  }

  & > div:nth-child(3) {
    & > span {
      display: block;
      line-height: 1.6;
      margin-bottom: 10px;
      font-size: 14px;
      background-color: #eee;
      padding: 10px 15px;
      border-radius: 10px;
    }
  }

  & > div:last-child {
    & > p {
      border: 1px solid #ddd;
      color: #222;
      padding: 15px;
      font-size: 15px;
      border-radius: 10px;
      font-weight: 400;
      line-height: 1.6;
      margin: 0;
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    & > div {
      & > h4 {
        font-size: 18px;
        margin: 20px 0 10px 0;
      }

      & > p {
        font-size: 16px;
      }
    }

    & > div:first-child,
    & > div:nth-child(3) {
      & > p {
        margin: 20px 0 5px 0;
      }
      & > ul {
        gap: 10px;

        & > li {
          font-size: 12px;
        }
      }
    }

    & > div:nth-child(2) {
      & > ul {
        & > li {
          font-size: 12px;
        }
      }
    }

    & > div:nth-child(3) {
      & > span {
        font-size: 12px;
      }
    }

    & > div:last-child {
      & > p {
        font-size: 13px;
      }
    }
  }
`;
