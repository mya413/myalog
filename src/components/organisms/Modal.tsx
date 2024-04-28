import { MouseEvent } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { ProjectsDataProps } from "@/data/projectsData";
import Item from "../molecules/modal/Item";

interface ModalProps {
  selectedCard: ProjectsDataProps[];
  modalCloseHandler: (e: MouseEvent) => void;
}

export default function Modal({ selectedCard, modalCloseHandler }: ModalProps) {
  if (!selectedCard || selectedCard.length === 0) return null;

  const card = selectedCard[0];

  const overlayClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      modalCloseHandler(e);
    }
  };

  return (
    <ModalStyle onClick={overlayClickHandler}>
      <div>
        <div>
          <button type="button" onClick={modalCloseHandler}>
            <IoClose />
          </button>
        </div>
        <Item card={card} />
      </div>
    </ModalStyle>
  );
}

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 0.3s;

  & > div {
    position: relative;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 40px 50px 0 50px;
    background-color: #fff;
    border-radius: 20px;

    & > div {
      background-color: #fff;
      width: 100%;

      & > button {
        position: absolute;
        top: 30px;
        right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        width: 20px;
        height: 20px;
        background-color: #fe5f58;

        & > svg {
          display: none;
        }
      }

      & > button:hover {
        & > svg {
          color: #222;
          display: block;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px;

    & > div {
      padding: 40px 30px;

      & > div {
        & > button {
          top: 20px;
          right: 20px;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;
