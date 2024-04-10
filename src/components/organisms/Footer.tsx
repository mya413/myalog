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
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 20px;

  & > p {
    color: #bbb;
    font-size: 10px;

    & > span {
      font-weight: 500;
    }
  }
`;
