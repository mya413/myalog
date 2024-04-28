import { useEffect, useState, MouseEventHandler } from "react";
import styled from "styled-components";
import { ProjectsDataProps, projectsData } from "@/data/projectsData";
import Modal from "../organisms/Modal";

interface CardProps {
  selected: string;
  selectedCard: ProjectsDataProps[];
  setSelectedCard: React.Dispatch<React.SetStateAction<ProjectsDataProps[]>>;
}

export default function Card({
  selected,
  selectedCard,
  setSelectedCard,
}: CardProps) {
  const [modal, setModal] = useState(false);
  const [filteredCard, setFilteredCard] = useState<ProjectsDataProps[]>([]);

  const modalHandler = (card: ProjectsDataProps) => {
    setSelectedCard([card]);
    setModal(true);
  };

  const modalCloseHandler: MouseEventHandler = () => {
    setModal(false);
  };

  useEffect(() => {
    if (selected === "default" || selected === "All") {
      setFilteredCard(projectsData);
    } else {
      const filtered = projectsData.filter((card) =>
        card.isTeam ? selected === "Team" : selected === "Personal"
      );
      setFilteredCard(filtered);
    }

    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected, modal]);

  return (
    <>
      {modal && (
        <Modal
          selectedCard={selectedCard}
          modalCloseHandler={modalCloseHandler}
        />
      )}
      <CardStyle>
        {filteredCard
          .sort((a, b) =>
            Number(a.endDate.year) === Number(b.endDate.year)
              ? Number(b.endDate.month) - Number(a.endDate.month) || b.id - a.id
              : Number(b.endDate.year) - Number(a.endDate.year)
          )
          .map((card) => (
            <li key={card.id} onClick={() => modalHandler(card)}>
              <CardInnerBlock>
                <div>
                  <img src={card.thumbnail} alt="thumbnail image" />
                  <span className={card.isTeam ? "yellow" : "blue"}>
                    {card.isTeam ? "Team" : "Personal"}
                  </span>
                </div>
                <div>
                  <span>{card.title}</span>
                  <span>{`${card.startDate.year}.${card.startDate.month} ~ ${card.endDate.year}.${card.endDate.month}`}</span>
                  <span>{card.description}</span>
                  <span>
                    {card.skills.map((skill, idx) =>
                      idx === card.skills.length - 1 ? skill : `${skill} | `
                    )}
                  </span>
                </div>
              </CardInnerBlock>
            </li>
          ))}
      </CardStyle>
    </>
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
    & > li {
      height: 300px;
    }
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
      padding: 0 20px;
    }

    & > span {
      position: absolute;
      left: 0;
      top: 0;
      border-top-left-radius: 10px;
      background-color: #5d6066;
      color: #fff;
      padding: 10px;
      font-size: 10px;
      font-weight: 500;
    }

    & > span.blue {
      background-color: #5b8eda;
    }

    & > span.yellow {
      background-color: #febc2e;
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
      line-height: 1.5;
    }

    & > span:first-child {
      font-size: 18px;
      font-weight: 600;
    }

    & > span:nth-child(2),
    & > span:nth-child(3),
    & > span:last-child {
      background-color: #ddd;
      padding: 5px 10px;
      border-radius: 10px;
      font-weight: 500;
    }

    & > span:nth-child(3) {
      background-color: #222;
      color: #eee;
    }
  }

  @media screen and (max-width: 768px) {
    & > div:first-child {
      height: 300px;

      & > img {
        height: 300px;
      }
    }

    & > div:last-child {
      height: 300px;
    }
  }
`;
