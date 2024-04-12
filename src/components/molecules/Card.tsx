import styled from "styled-components";
import { cardList } from "@/utils/cardList";

export default function Card() {
  return (
    <CardStyle>
      {cardList.map((card) => (
        <li key={card.id}>
          <CardInnerBlock>
            <div>
              <img src={card.thumbnail} alt="thumbnail image" />
              <span>{card.tag}</span>
            </div>
            <div>
              <span>{card.title}</span>
              <span>{card.description}</span>

              <span>
                {card.skills.map((skill, idx) =>
                  idx === card.skills.length - 1 ? skill : `${skill} / `
                )}
              </span>
            </div>
          </CardInnerBlock>
        </li>
      ))}
    </CardStyle>
  );
}

const CardStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  margin-bottom: 40px;

  & > li {
    border-radius: 10px;
    width: 100%;
    height: 200px;
    transition: all 0.5s;
    box-shadow: 2px 2px 5px 0 rgba(34, 34, 34, 0.3);
    cursor: pointer;
  }

  & > li:hover {
    transform: translateY(-5px);
    transition: transform 0.5s;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 768px) {
  }
`;

const CardInnerBlock = styled.div`
  display: flex;
  align-items: center;

  & > div:first-child {
    width: 40%;
    height: 200px;
    position: relative;

    & > img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }

    & > span {
      position: absolute;
      left: 0;
      top: 0;
      border-top-left-radius: 10px;
      background-color: #222;
      color: #fff;
      padding: 10px;
      font-size: 10px;
      font-weight: 500;
    }
  }

  & > div:last-child {
    width: 60%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eee;
    padding: 20px;
    gap: 10px;

    & > span {
      font-size: 12px;
    }

    & > span:first-child {
      font-size: 18px;
      font-weight: 600;
    }

    & > span:last-child {
      display: block;
      padding: 10px;
      background-color: #ddd;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.5;
    }
  }
`;
