import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../public/favicon.svg";

interface HeaderType {
  path: string;
}

export default function Header({ path }: HeaderType) {
  return (
    <HeaderStyle>
      <HeaderTopStyle>
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>MYALOG</span>
        </Link>
      </HeaderTopStyle>
      <HeaderBottomStyle>
        <div>
          <span>{`https://myalog.com${path === "/" ? "" : path}`}</span>
        </div>
        <div>
          <p>
            <span>Today</span>100
          </p>
          <p>
            <span>Total</span>1004
          </p>
        </div>
      </HeaderBottomStyle>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  background-color: #eee;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom: 1px solid #eee;

  @media screen and (max-width: 767px) {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
`;

const HeaderTopStyle = styled.div`
  width: 100%;
  padding-top: 10px;

  & > a {
    width: 222px;
    height: 35px;
    background-color: #fff;
    margin-left: 30px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    display: flex;
    align-items: center;

    & > img {
      width: 18px;
      height: 18px;
      background-color: #222;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 10px;
    }

    & > span {
      font-size: 12px;
    }
  }
`;

const HeaderBottomStyle = styled.div`
  background-color: #fff;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    background-color: #eee;
    border-radius: 30px;
    width: 50%;
    margin-left: 30px;
    padding: 5px;
    display: flex;
    align-items: center;

    & > span {
      font-size: 12px;
      padding: 4px 0 4px 10px;
    }
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    margin-right: 30px;

    & > p {
      font-size: 12px;
      color: #bbb;

      & > span {
        font-weight: 600;
        margin-right: 3px;
      }
    }

    & > p:last-child {
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    & > div:last-child {
      & > p {
        font-size: 10px;
      }
    }
  }
`;
