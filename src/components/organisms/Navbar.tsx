import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "@/components/atoms/Button";

interface NavbarType {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ openMenu, setOpenMenu }: NavbarType) {
  return (
    <NavbarStyle openMenu={openMenu}>
      {openMenu && <Button openMenu={openMenu} setOpenMenu={setOpenMenu} />}
      <div>
        <Link to="/myalog">README.md</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="https://github.com/mya413" target="_blank">
          Github
        </Link>
        <Link to="https://myalog.tistory.com/" target="_blank">
          Blog
        </Link>
      </div>
    </NavbarStyle>
  );
}

const NavbarStyle = styled.nav<{ openMenu: boolean }>`
  background-color: #eee;
  width: ${(props) => (props.openMenu ? "30.5%" : "0")};
  height: 100%;
  border-bottom-left-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
  transition: all 0.8s;

  & > div {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 80px 0 0 50px;

    & > a {
      margin-bottom: 30px;
      font-size: 20px;
      font-weight: 500;
      opacity: 0.6;
      cursor: pointer;
      transition: all 0.8s;

      &:hover {
        opacity: 1;
        transition: all 0.8s;
      }
    }

    & > a:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.openMenu ? "100%" : "0")};
    border-bottom-right-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
