import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

export default function Readme() {
  return (
    <ReadmeStyle>
      <p>"자신과 타협하지 말자"라는 모토를 실천하는 개발자 이승미입니다.</p>
      <p>
        스스로의 한계를 정하지 않고 주도적으로 발전하며, 문제 해결에 있어서도
        융통성과 창의성을 발휘합니다.
      </p>
      <p>
        <span>
          학습한 기능과 애니메이션을 프로젝트에 접목시키는 것을 좋아합니다.
        </span>
        <br />
        평소 웹 사이트나 서비스를 이용할 때, 여러 인터랙션과 기능에 대한
        호기심을 가지고 공부해보려 노력합니다.
      </p>
      <p>
        <span>문제에 대해 고민하고 해결하는 과정을 좋아합니다.</span>
        <br />
        예상치 못한 버그에 대처할 때 문제에 대해 팀원과 공유하고, 새로운 접근
        방식을 시도합니다.
        <br />
        문제의 본질을 파악하고, 다양한 대안을 고려하여 유연하게 대응하며 해결이
        될 때까지 그 과정을 즐깁니다.
      </p>
      <div>
        <Link to="/portfolio">
          <span>Portfolio</span>
          <FaArrowRight />
        </Link>
        <Link
          to="https://www.rallit.com/resumes/65743@lsm940413/%EC%9D%B4%EC%8A%B9%EB%AF%B8"
          target="_blank"
        >
          <span>Resume</span>
          <FaArrowRight />
        </Link>
        <Link to="https://github.com/mya413" target="_blank">
          <span>Github</span>
          <FaArrowRight />
        </Link>
        <Link to="https://myalog.tistory.com/" target="_blank">
          <span>Blog</span>
          <FaArrowRight />
        </Link>
      </div>
    </ReadmeStyle>
  );
}

const ReadmeStyle = styled.div`
  height: 100%;
  overflow: auto;
  color: #222;

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 30px;

    & > span {
      font-weight: 600;
    }
  }

  & > div {
    display: flex;
    margin-top: 60px;

    & > a {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      background-color: #eee;
      padding: 10px 20px;
      border-radius: 20px;
      font-weight: 400;
      font-size: 14px;
      margin-right: 5px;

      & > svg {
        margin-left: 5px;
        transition: all 0.5s;
      }
    }

    & > a:last-child {
      margin-right: 0;
    }

    & > a:hover {
      & > svg {
        transition: all 0.5s;
        transform: translateX(5px);
      }
    }
  }

  @media screen and (max-width: 767px) {
    & > p {
      font-size: 14px;
      margin-bottom: 20px;
    }

    & > div {
      margin-top: 30px;

      & > a {
        font-size: 12px;
      }
    }
  }
`;
