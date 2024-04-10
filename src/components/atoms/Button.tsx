import { styled } from "styled-components";
import { IoClose, IoMenu } from "react-icons/io5";

interface ButtonType {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Button({ openMenu, setOpenMenu }: ButtonType) {
  return (
    <ButtonStyle
      type="button"
      onClick={() => {
        setOpenMenu(!openMenu);
      }}
    >
      {openMenu ? <IoClose /> : <IoMenu />}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  position: absolute;
  top: 50px;
  right: 20px;

  & > svg {
    font-size: 24px;
    color: #222;
  }

  @media screen and (max-width: 1024px) {
    top: 30px;
  }
`;
