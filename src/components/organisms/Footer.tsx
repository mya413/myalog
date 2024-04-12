import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterStyle>
      <p>
        <span>©2024.</span> Seungmi Lee, All Rights Reserved.
      </p>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  width: 20%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 4%;
  bottom: 20px;

  & > p {
    color: #bbb;
    font-size: 10px;

    & > span {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    left: 0;
  }
`;
