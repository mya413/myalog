import Header from "@/components/organisms/Header";
import { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "@/components/organisms/Navbar";
import Sidebar from "@/components/organisms/Sidebar";
import Title from "@/components/atoms/Title";
import Footer from "@/components/organisms/Footer";

export default function Basic() {
  const location = useLocation();
  const path = location.pathname;

  const [$openMenu, setOpenMenu] = useState(false);

  return (
    <BasicStyle>
      <div>
        <Header path={path} />
        <div>
          <Navbar $openMenu={$openMenu} setOpenMenu={setOpenMenu} />
          <Sidebar $openMenu={$openMenu} setOpenMenu={setOpenMenu} />
          <MainStyle>
            <Title path={path} />
            <Outlet />
          </MainStyle>
        </div>
        <Footer />
      </div>
    </BasicStyle>
  );
}

const BasicStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  transition: all 0.3s;

  & > div {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    box-shadow: 0 0 30px 0 rgba(34, 34, 34, 0.3);
    border-radius: 20px;
    position: relative;

    & > div {
      min-height: 772px;
      display: flex;
      justify-content: space-between;
      position: relative;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 1024px) {
    transition: all 0.3s;

    & > div {
      & > div {
        display: block;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    transition: all 0.3s;

    & > div {
      box-shadow: none;
      border-radius: 0;
    }
  }
`;

const MainStyle = styled.main`
  width: 900px;
  height: 621px;
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 40px;

    & > div {
      height: 460px;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px;

    & > div {
      height: 520px;
    }
  }
`;
