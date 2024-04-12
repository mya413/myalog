import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";
import profileImg from "@/assets/profileImg.png";
import Button from "@/components/atoms/Button";

interface SidebarType {
  $openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ $openMenu, setOpenMenu }: SidebarType) {
  return (
    <SidebarStyle>
      {!$openMenu && <Button $openMenu={$openMenu} setOpenMenu={setOpenMenu} />}
      <ImgBlock>
        <img src={profileImg} alt="프로필 사진" />
      </ImgBlock>
      <InfoBlock>
        <span>이승미</span>
        <span>Front-end Developer</span>
        <p>
          스스로의 한계를 정하지 않고 주도적으로 발전하는 사람이 되고자 합니다.
        </p>
      </InfoBlock>
      <LinkBlock>
        {linkList.map((link, idx) => (
          <Link
            key={link.id}
            to={idx + 1 === link.id ? link.url : ""}
            target="_blank"
            type="button"
          >
            {idx + 1 === link.id && link.component}
          </Link>
        ))}
      </LinkBlock>
    </SidebarStyle>
  );
}

const linkList = [
  {
    id: 1,
    url: "https://github.com/mya413",
    component: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/%EC%8A%B9%EB%AF%B8-%EC%9D%B4-15bb2825a/",
    component: <FaLinkedin />,
  },
  {
    id: 3,
    url: "mailto:dev.seungmilee@gmail.com",
    component: <FaGoogle />,
  },
];

const SidebarStyle = styled.aside`
  width: 300px;
  border-right: 1px solid #eee;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 100%;
    position: static;
    display: flex;
    align-items: center;
    border-right: 0;
    border-bottom: 1px solid #eee;
    padding: 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const ImgBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 200px;
    height: 200px;
    margin-top: 50px;
    border-radius: 100%;
  }

  @media screen and (max-width: 1024px) {
    & > img {
      width: 100px;
      height: 100px;
      margin-top: 0;
    }
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  & > span {
    font-size: 16px;
    font-weight: 600;
    color: #222;
  }

  & > span:first-child {
    margin-bottom: 10px;
  }

  & > span:nth-child(2) {
    margin-bottom: 20px;
    font-weight: 500;
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    word-break: keep-all;
    opacity: 0.6;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    padding: 0 20px;

    & > span:first-child {
      margin-bottom: 0;
    }

    & > span:nth-child(2) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    & > span {
      font-size: 14px;
    }

    & > p {
      font-size: 12px;
    }
  }
`;

const LinkBlock = styled.div`
  display: flex;
  align-items: center;
  padding-left: 30px;

  & > a {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    color: #bbb;
    transition: all 0.1s;

    & > svg {
      margin-right: 5px;
    }
  }

  & > a:last-child {
    margin-right: 0;
  }

  & > a:hover {
    color: #222;
    transition: all 0.1s;
  }

  @media screen and (max-width: 1024px) {
    opacity: 0;
    position: absolute;
    left: 30px;
    flex-direction: row;
    gap: 5px;
    padding: 0;
    padding: 42px 18px;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      opacity: 1;
      background-color: #ddd;
      transition: opacity 0.3s;
    }

    & > a {
      margin-bottom: 0;
      color: #fff;

      & > svg {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    left: 20px;
  }
`;
