import thumbnailImg1 from "@/assets/portfolio1.png";
import thumbnailImg2 from "@/assets/portfolio2.png";
import thumbnailImg3 from "@/assets/portfolio3.png";
import thumbnailImg4 from "@/assets/portfolio4.png";
import thumbnailImg5 from "@/assets/portfolio5.png";

export interface IssueProps {
  problem: string;
  cause: string;
  try: string[];
}

export interface FeatProps {
  title: string;
  desc: string[];
}

export interface ProjectsDataProps {
  id: number;
  thumbnail: string;
  isTeam: boolean;
  title: string;
  description: string;
  descDetail: string;
  skills: string[];
  startDate: {
    year: string;
    month: string;
  };
  endDate: {
    year: string;
    month: string;
  };
  dev: {
    team?: {
      front: string;
      back: string;
    } | null;
    feat: FeatProps[];
    skillStack: string[];
    skillDesc: string[];
    issue: IssueProps[];
    insight: string[];
  };
  link?: string | null;
}

export const projectsData: ProjectsDataProps[] = [
  {
    id: 1,
    thumbnail: `${thumbnailImg1}`,
    isTeam: true,
    title: "🩵 withchildren",
    description: "유니세프 아동친화도시 전용 사이트",
    descDetail:
      "[사내 프로젝트] 모티브앤의 유니세프 아동친화도시 전용 사이트 제작 프로젝트입니다.",
    skills: [
      "Next.js",
      "TypeScript",
      "Styled-components",
      "Recoil",
      "React-query",
      "Axios",
    ],
    startDate: {
      year: "2023",
      month: "11",
    },
    endDate: {
      year: "2023",
      month: "12",
    },
    dev: {
      feat: [
        {
          title: "반응형 웹 레이아웃 구현 및 퍼블리싱",
          desc: [
            "Figma에서 디자인된 화면 구성에 맞게 퍼블리싱",
            "Styled-components의 props 기능과 CSS 미디어쿼리를 활용하여 device에 따른 반응형 UI 구현",
            "Swiper.js를 활용하여 메인 화면 내 캐러셀 슬라이드 구현",
          ],
        },
        {
          title: "숫자 카운팅 애니메이션 구현",
          desc: [
            "Intersection Observer와 useRef, useEffect를 활용하여 useCountNumber 커스텀훅을 생성",
            "entries[0].isIntersecting을 통해 요소가 감지되었을 때, setInterval()로 카운팅되는 숫자를 0부터 커스텀훅의 파라미터로 받은 숫자까지 서서히 증가시킬 수 있도록 구현",
            "easeOutExpo() 함수로 숫자가 증가될 때 애니메이션이 천천히 올라갈 수 있도록 부드럽게 프레임을 쪼갤 수 있도록 설정",
            "요소가 지정된 화면에서 사라지거나, observer의 현재 상태가 unobserver 되었을 때 clearInterval()를 통해 카운팅 애니메이션을 초기화",
          ],
        },
      ],
      skillStack: ["Swiper.js", "Dayjs", "mySQL", "Dotenv", "Figma"],
      skillDesc: [
        "퍼블리싱을 진행하며 슬라이드 라이브러리를 활용해보고 싶었고, 순수 CSS로 작성하는 것 보다 업무 효율을 더 빠르게 높일 수 있을 것 같아 Swiper.js를 채택",
      ],
      issue: [
        {
          problem: "문제발생",
          cause: "문제원인/현상",
          try: ["시도한것들1", "시도한것들2"],
        },
        {
          problem: "문제발생",
          cause: "문제원인/현상",
          try: ["시도한것들1", "시도한것들2"],
        },
      ],
      insight: [],
    },
  },
  {
    id: 2,
    thumbnail: `${thumbnailImg2}`,
    isTeam: true,
    title: "🛍️ DevStore",
    description: "개발자를 위한 쇼핑몰",
    descDetail:
      "[팀 프로젝트] 개발자들에게 필요한 컴퓨터 및 관련 장비를 판매하는 쇼핑몰입니다. 베스트 아이템, 리뷰, 상품문의 등 소비자를 위한 서비스를 제공합니다.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "Axios"],
    startDate: {
      year: "2023",
      month: "06",
    },
    endDate: {
      year: "2023",
      month: "09",
    },
    dev: {
      team: {
        front: "4",
        back: "2",
      },
      feat: [
        {
          title: "이미지 미리보기 및 이미지 데이터 추가/수정 구현",
          desc: [
            "createObjectURL를 활용하여 변경될 상품 이미지 미리보기 구현",
            "revokeObjectURL를 활용하여 스택에서 이미지를 제거하고, 메모리 관리",
            "Blob 객체와 FormData 객체에 이미지 데이터를 담아 서버에 post/patch 요청",
          ],
        },
        {
          title: "CRUD 구현",
          desc: [
            "Axios를 활용하여 서버에 각 요청을 보냄",
            "메인 페이지, 관리자 페이지(공지사항, 상품 등록 및 수정) CRUD 구현",
          ],
        },
        {
          title: "AWS S3, CloudFront 클라이언트 배포",
          desc: [
            "AWS S3 버킷을 생성하여 클라이언트 정적 배포 진행",
            "Github Actions를 활용하여 배포 자동화 진행",
          ],
        },
        {
          title: "반응형 웹 레이아웃 구현",
          desc: [
            "Tailwind CSS + CSS 미디어 쿼리를 사용하여 반응형 UI 구현",
            "순수 CSS 기반 반응형 캐러셀 UI 구현",
          ],
        },
      ],
      skillStack: [
        "AWS S3",
        "ESlint",
        "Prettier",
        "Craco",
        "PostCSS",
        "React-router-dom",
        "Dompurify",
        "Recharts",
        "Figma",
        "Swagger",
      ],
      skillDesc: [""],
      issue: [
        {
          problem: "문제발생",
          cause: "문제원인/현상",
          try: ["시도한것들1", "시도한것들2"],
        },
        {
          problem: "문제발생",
          cause: "문제원인/현상",
          try: ["시도한것들1", "시도한것들2"],
        },
      ],
      insight: [],
    },
    link: "https://github.com/devstoreproject/devstore",
  },
  {
    id: 3,
    thumbnail: `${thumbnailImg3}`,
    isTeam: true,
    title: "💪🏻 헬스타트업",
    description: "위치기반 헬스 정보 공유 커뮤니티 서비스",
    descDetail:
      "[팀 프로젝트] 처음 운동을 시작하거나 오랜만에 운동을 다시 시작하려는 사람들을 위한 위치기반 헬스 정보 공유 커뮤니티 서비스입니다.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Zustand", "Axios"],
    startDate: {
      year: "2023",
      month: "03",
    },
    endDate: {
      year: "2023",
      month: "04",
    },
    dev: {
      team: {
        front: "3",
        back: "3",
      },
      feat: [
        {
          title: "프로필 이미지 수정 구현",
          desc: [
            "useState 훅을 활용하여 onChange 이벤트 핸들러함수를 통해 파일 형태의 input value를 전달받고, 첫번째 사진 파일을 변수에 담아 상태를 업데이트",
            "FileReader 객체와 readAsDataURL 메소드를 활용하여 변수에 담긴 사진 파일의 url을 담아옴",
            "readAsDataURL 메소드의 result 속성을 활용하여 담아온 url을 비동기적으로 onload 이벤트로 상태가 업데이트 되도록 구현",
            "수정할 이미지를 새로운 Blob 객체와 FormData 객체에 담아 서버에 patch 요청을 보내도록 구현",
            "useNavigate 훅을 활용하여 수정 완료 후 alert 메세지와 함께 메인 화면으로 리다이렉트 되도록 UI 구현",
          ],
        },
        {
          title: "회원 탈퇴, 로그아웃 구현",
          desc: [
            "localStorage에 저장된 refresh token 정보와 access token 정보를 localStorage.clear() 메소드를 활용하여 스토리지에 담김 정보를 삭제",
            "useNavigate 훅을 활용하여 로그아웃 버튼 클릭 시 alert 메세지와 함께 로그인 화면으로 리다이렉트 되도록 UI 구현",
            "회원 탈퇴 버튼 클릭 시 window.confirm() 메소드를 통해 유저가 회원탈퇴에 대해 재확인 할 수 있도록 UI 구현",
            "window.confirm()이 true 일 경우 변경된 정보를 서버에 delete 요청을 보내도록 구현",
            "window.location.replace() 메소드를 통해 로그인 화면으로 리다이렉트 되도록 UI 구현",
          ],
        },
        {
          title: "비밀번호 변경, 댓글 수정, 댓글 삭제 구현",
          desc: [
            "useState 훅을 활용하여 비밀번호, 댓글의 state를 업데이트",
            "업데이트 된 상태를 Axios를 활용하여 서버에 patch와 delete 요청",
          ],
        },
        {
          title: "반응형 웹 레이아웃 구현",
          desc: ["Tailwind CSS + CSS 미디어 쿼리를 사용하여 반응형 UI 구현"],
        },
        {
          title: "AWS S3 버킷으로 이미지 파일 관리",
          desc: [
            "서버의 부하를 줄이기 위해 이미지 데이터는 AWS S3 버킷을 생성하여 관리",
            "이미지와 관련된 서버 요청은 S3 버킷 url로 요청하여 관리가 용이하도록 함",
          ],
        },
        {
          title: "AWS S3 클라이언트 배포",
          desc: ["AWS S3 버킷을 생성하여 클라이언트 정적 배포 진행"],
        },
      ],
      skillStack: [
        "React-kakao-maps-sdk",
        "MSW",
        "React-quill",
        "React-hook-form",
        "React-router-dom",
        "AWS S3",
        "ESlint",
        "Prettier",
        "Figma",
        "Postman",
      ],
      skillDesc: [
        "협업에서 더 강력한 힘을 발휘하는 TypeScript이지만, 마감 기한과 러닝 커브에 대한 부담감으로 JavaScript를 채택함, 팀원과의 충분한 회의를 통해 코드 컨벤션으로 변수명이나 타입을 정하여 개발이 원활히 진행될 수 있도록 함",
        "Tailwind CSS가 떠오르는 시점에, CSS-in-JS와의 차이점을 경험하고 싶고, 러닝 커브가 높지 않아보여 Tailwind CSS를 채택",
        "컴포넌트 간 데이터 상태를 주고받는 일이 잦아질 것 같아 상태 관리 라이브러리로 Redux를 채택하려 했으나, 미숙한 팀원이 있어 Redux에서 파생되었지만, 허들이 조금 낮은 Zustand로 채택",
        "api 명세서는 완성되었지만, 서버단에서 api 개발이 늦어짐에 따라 클라이언트단에서 임시로 데이터와 요청할 api를 만들어 개발의 진행이 원활해질 수 있도록 MSW 채택",
      ],
      issue: [
        {
          problem:
            "서버에서 받아온 데이터를 UI에 활용할 때, 데이터가 undefined일 경우 발생하는 문제",
          cause:
            "데이터 상태가 업데이트 되기 전에 데이터를 활용하려고 하다보니 위와 같은 문제가 발생",
          try: [
            "데이터를 받아오기 전 Optional chaining 연산자를 활용하여 객체의 프로퍼티나 메서드가 호출되도록 하고, 데이터의 상태가 현재 undefined나 null이어도 오류가 뜨지 않도록 해결함, 하지만 이를 남용하면 오히려 디버깅이 어려워질 수 있음을 인식해야함",
            "데이터의 상태에 undefined일 경우 조건문으로 분기를 나눠 해결하는 것도 하나의 방법이 될 수 있을 것 같음",
          ],
        },
        {
          problem: "S3 클라이언트 배포 후 CORS 에러가 발생한 문제",
          cause:
            "클라이언트단과 서버단에서 CORS 설정을 하지 않아 위와 같은 문제가 발생",
          try: [
            "AWS 웹 콘솔에서 S3 CORS 정책을 활성화하고, 올바른 응답값을 설정하여 해결함",
            "근본적인 해결책으로, 서버에서 미들웨어를 통해 Access-Control-Allow-Origin 헤더에 허용하고자 하는 도메인을 설정하여 해결함",
          ],
        },
      ],
      insight: [
        "Zustand를 활용해봄으로써 Redux가 다른 상태 관리 라이브러리에 많은 귀감이 된 것을 알았고, 오히려 Redux를 더 잘 알고, 잘 활용할 수 있어야겠다고 생각이 들었음",
        "Tailwind CSS는 className으로 스타일링을 할 수 있지만, 요소 자체에 클래스를 지정하고 싶을 땐 classnames 라이브러리를 사용하는 등의 다른 추가 설정이 필요하여 불편했지만, tailwind className을 접어주는 VSC 익스텐션이 있어 이를 잘 활용하여 코드 가독성이 좋아질 수 있었음",
        "MSW를 통해 mock data를 만들어보기도 하고, 짧지만 api 코드를 작성해보면서 어떤식으로 api를 요청받고, 응답하는지 그 흐름을 조금은 이해할 수 있었음",
      ],
    },
    link: "https://github.com/codestates-seb/seb42_main_012/tree/main",
  },
  {
    id: 4,
    thumbnail: `${thumbnailImg4}`,
    isTeam: false,
    title: "☁️ Search Your Weather",
    description: "대한민국의 현재 날씨 및 시간 정보 제공 서비스",
    descDetail:
      "[개인 프로젝트] 공공데이터 API를 통해 대한민국의 현재 날씨 및 시간을 제공합니다.",
    skills: ["React", "TypeScript", "Styled-components"],
    startDate: {
      year: "2024",
      month: "04",
    },
    endDate: {
      year: "2024",
      month: "04",
    },
    dev: {
      feat: [
        {
          title: "Web Storage에 사용자 정보 저장 및 UI 구현",
          desc: [
            "브라우저 Web Storage의 Session Storage와 useState 훅을 활용하여 사용자가 입력한 input value를 스토리지에 저장하고, 해당 값을 UI로 구현",
            "input의 max value를 지정하고, value가 한글일 경우 1byte씩 더 입력되는 것을 방지",
          ],
        },
        {
          title: "검색 기능 구현",
          desc: [
            "기상청 공공데이터 API와 useState 훅을 활용하여 사용자가 입력한 input value 값에 따라 상태값을 업데이트",
            "onkeydown 이벤트 핸들러 함수를 통해 사용자가 enter키를 눌렀는지 감지하고, 이벤트가 발생하면 해당되는 데이터의 UI가 보여지도록 구현",
            "input value가 영어인지 한글인지 확인하여 조건문으로 이벤트가 중복 발생되는 것을 방지",
            "useState 훅과 svg 컴포넌트를 활용하고, onclick 이벤트 핸들러 함수를 생성, 검색할 해당 지역의 지도를 클릭 할 경우 상태 값을 업데이트하여 해당되는 데이터의 UI가 보여지도록 구현",
          ],
        },
        {
          title: "반응형 웹 레이아웃 구현",
          desc: [
            "기상청 공공데이터 API와 useState 훅을 활용하여 데이터를 상태에 담아오고, 업데이트 된 상태값에 따른 UI 구현",
            "SVGR을 활용하여 svg 이미지를 컴포넌트화 하고, active 된 상태에 따라 UI가 변경될 수 있도록 구현",
            "CSS 미디어쿼리를 활용하여 디바이스 너비에 따른 반응형 레이아웃 구현",
          ],
        },
      ],
      skillStack: [
        "React-router-dom",
        "SVGR",
        "Craco",
        "Dotenv",
        "Webpack",
        "Git",
        "Vercel",
      ],
      skillDesc: [
        "svg 이미지 파일을 좀 더 효율적으로 사용할 수 있도록 SVGR을 채택",
        "데이터를 호출하는 api의 key와 url은 공개되면 안되기 때문에 레포지토리에 push할때 드러나지 않도록 Dotenv를 채택",
        "이번 프로젝트는 CRA,Webpack 빌드 환경임, path alias를 활용하기 위해 Webpack 및 Babel 설정을 업데이트 할 수 있도록 Craco를 채택",
      ],
      issue: [
        {
          problem:
            "input value가 영어와 숫자, 특수문자일 경우에는 정상적이지만, 한글일 경우 1byte씩 더 추가되는 문제",
          cause:
            "한글은 2byte, 그 외 문자는 1byte로 입력 되어 위와 같은 문제 발생",
          try: [
            "input에 max value 설정하여 지정된 길이를 지정할 수 있도록 함",
            "input value의 맨 앞 인덱스부터 최대 지정 길이까지만 추출하는 조건문을 생성하여 먼저 필터링을 하고, 그 후 상태를 업데이트 할 수 있도록 함",
          ],
        },
        {
          problem: "배포 후 Mixed Content 에러가 발생한 문제",
          cause:
            "https 도메인에서 http로 비동기 ajax 요청을 보내 위와 같은 문제 발생",
          try: [
            `index.html에 [<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />] 메타 태그를 추가함`,
            "메타 태그를 적용하여 수정하였으나, 리소스가 저장된 서버에 https가 반드시 지원이 되어야 하기에 적정한 방법이 아닌 것 같음",
            "요청 url의 http 프로토콜을 강제로 https로 변경하여 요청하여 해결함",
            "http와 https를 통해 표시된 리소스가 동일하여 아무런 이상 없이 정상적으로 데이터가 출력됨",
          ],
        },
        {
          problem: "검색창에서 onkeyup 이벤트로 api 호출 시 2번 호출되는 문제",
          cause:
            "input value가 영문일 경우에는 알파벳 한글자씩 표현되지만, 한글의 경우 자음+모음의 조합으로 만들어지는 문자이기 때문에 현재 value가 조합중인 상태인지, 조합이 끝난 상태인지 알 수 없어 이 과정을 OS와 브라우저가 동시에 처리하기 때문에 이벤트가 중복으로 발생하여 위와 같은 문제 발생",
          try: [
            "React Strict Mode로 설정되어 있는지 확인 후 해제, 하지만 이는 프로젝트 초반에 설정을 미리 해뒀었음",
            "keyup, keydown 이벤트를 keypress 이벤트로 변경, 하지만 이는 MDN에서 Deprecated된 이벤트이므로 적절하지 않음",
            "event.nativeEvent.isComposing의 값(boolean)을 참조하여 true일 경우 리턴하도록 해결",
          ],
        },
      ],
      insight: [
        "기상청 공공데이터를 활용하여 서버와 통신할 수 있었음, 타 api 비해 api 명세서가 불친절한 편이었지만 1시간 단위로 업데이트 되는 초단기예보 api를 통해 실시간으로 업데이트 되는 데이터를 확인할 수 있었음",
        "svg 이미지를 리액트에서 좀 더 효율적으로 활용할 수 있었음",
        "Web Storage와 Cookie의 차이점, 그리고 Web Storage에서 Local Storage와 Session Storage의 차이점을 확실히 알 수 있었음, 그 차이점을 통해 일회성으로 휘발되는 정보를 활용하기 위해 Session Storage를 채택할 수 있었음",
        "서버에 요청 시 프로토콜의 차이에서 발생하는 이슈에 대한 경험와 브라우저가 보안에 얼마나 신경을 쓰고 있는지 알 수 있었음",
        "atomic design pattern을 도입하였으나 아직 미숙하여 좀 더 디자인 패턴을 잘 적용시킬 수 있도록 해야함",
      ],
    },
    link: "https://github.com/mya413/search-your-weather-kr",
  },
  {
    id: 5,
    thumbnail: `${thumbnailImg5}`,
    isTeam: false,
    title: "✍🏻 MYALOG",
    description: "개인 포트폴리오 사이트",
    descDetail: "[개인 프로젝트] 포트폴리오에 대한 정보를 제공합니다.",
    skills: ["React", "TypeScript", "Styled-components", "Vite"],
    startDate: {
      year: "2024",
      month: "04",
    },
    endDate: {
      year: "2024",
      month: "04",
    },
    dev: {
      feat: [
        {
          title: "카드 필터 구현",
          desc: [
            "useState 훅과 핸들러함수로 onChange 이벤트를 활용하여 선택된 옵션을 현재 상태로 업데이트",
            "select 태그의 option default 값을 따로 지정하고, state의 초기값으로도 지정",
            "option value를 [초기값(default) / All 조회 / Team 조회 / Personal 조회]로 나누어 각 해당하는 옵션의 데이터를 filter 메소드를 통해 필터링하고, 상태 값을 업데이트",
            "useEffect 훅을 활용하여 selected 상태가 업데이트 될 경우에만 데이터가 업데이트 되도록 구현",
          ],
        },
        {
          title: "모달 구현",
          desc: [
            "useState 훅과 핸들러함수로 onClick 이벤트를 활용하여 카드를 클릭하면, 해당 카드와 일치하는 데이터가 업데이트되고, 모달로 보여지도록 구현",
            "state가 초기값이거나, 이벤트가 발생하지 않았을때는 null로 보여지도록 구현",
            "모달창이 열려있는 경우 뒷배경이 스크롤 이벤트가 작동되지 않도록 useEffect를 활용하여 document.body의 overflow 스타일을 조작",
            "모달창 뒷배경을 클릭해도 모달창이 닫히도록 onClick 핸들러함수를 배경에 적용",
          ],
        },
        {
          title: "지정된 요소로 바로가기 구현",
          desc: [
            "IntersectionObserver와 useRef를 활용하여 useObserver 라는 커스텀 훅을 생성",
            "커스텀 훅의 파라미터로 상태값과 업데이트 set 함수를 받아오고, useEffect로 상태가 업데이트 될때마다 호출 되도록 구현",
            "IntersectionObserver 생성자에 전달되는 options 객체를 UI에 맞게 설정(root,rootMargin,threshold)",
            "관찰할 타겟 요소 전달을 위해 현재 entries가 root와 교차하는지 entries는 IntersectionObserverEntry 인스턴스의 배열이므로 entries[0].isIntersecting 속성으로 확인하고, 그 값이 교차되었다면 상태를 업데이트 할 수 있도록 구현",
            "useRef를 활용하여 관찰대상에 참조할 대상을 등록하고, 참조대상이 사라지면 diconnect() 속성으로 관찰을 중단하도록 구현",
            "스크롤 핸들러함수를 생성하여 파라미터는 참조 대상과 인덱스 넘버를 받아오도록 하고, ref.current.scrollIntoView를 활용해 현재 참조 대상에 대한 속성을 지정",
          ],
        },
        {
          title: "반응형 웹 레이아웃 구현",
          desc: [
            "Styled-components의 props 기능을 활용하여 동적 UI 구현",
            "미디어 쿼리를 활용하여 device별 UI 레이아웃 구현",
          ],
        },
        // {
        //   title: "사이트 방문자 수 구현",
        //   desc: ["Google Analytics를 활용하여 사용자 방문자 수 기능 구현"],
        // },
        {
          title: "Vercel 클라이언트 배포",
          desc: [
            "Vercel을 통한 클라이언트 정적 배포",
            "Github action과 Vercel을 연동하여 배포 자동화",
          ],
        },
      ],
      skillStack: ["React-router-dom", "Git", "Vercel"],
      skillDesc: [
        "Create-React-App과 React+Vite의 조합 중 어떤 조합이 빌드가 더 빠르고, 가벼운지 비교하기 위해 빌드 도구를 Vite로 채택",
        "React 보다 더 빠른 렌더링과 SEO에 더 유리한 Next.js를 채택할까 생각도 했지만, 프로젝트 규모가 작고, 이미지가 많지 않기 때문에 굳이 필요없다 생각하여 React로 채택",
      ],
      issue: [
        {
          problem:
            "배포 환경에서는 나타나지 않지만, 로컬 환경에서 발생한 Warning 에러 로그가 발생하는 문제",
          cause:
            "상태값의 변수명을 prop으로 사용중이었는데, 이 prop이 DOM 요소로 인지되지 못하여 위와 같은 문제가 발생",
          try: [
            "상태값의 변수명을 소문자로 변경하라고 에러 로그에 제안되었지만, camel case로 활용하고 싶었음",
            "styled-components의 transient props를 활용하였음, 해당 변수명에 $ 기호를 붙여 React node로 전달하고, DOM 요소로 렌더링 되는 것을 방지하도록 함",
          ],
        },
        {
          problem:
            "Github pages로 배포 후 첫 렌더링 화면에서 빈화면으로 뜨거나, 새로고침 및 페이지 이동 시 404 페이지가 렌더링 되는 문제",
          cause:
            "현재 프로젝트 레포지토리 이름이 [깃허브아이디.github.io]가 아닌 상태에서 github pages로 배포하였고, 현재 레포지토리명의 엔드포인트(깃허브아이디.github.io/레포지토리명/)로 계속 접근하여 위와 같은 문제가 발생",
          try: [
            "react-router-dom의 작동 방식은 [url/지정된 엔드포인트]로 이동이 되어야 하는데, [깃허브아이디.github.io/레포지토리명/지정된 엔드포인트]로 렌더링을 시도하다보니 잘못된 경로로 계속 접근을 함, BrowserRouter를 HashRouter로 수정하기로 결정",
            "HashRouter로 변경하였지만 이는 SEO에 적합하지 않고, url에 해시(#)가 포함되어 적절하지 않아 다시 BrowserRouter로 변경",
            "배포 예정인 레포지토리라면 애초에 레포지토리를 생성할 때 레포지토리명을 [깃허브아이디.github.io]로 생성 후 Github pages 배포 환경에서 배포",
            "굳이 레포지토리명을 변경하고싶지 않았기 때문에 Github pages 배포 환경에서 배포를 하지 않아도 된다고 판단, 배포자동화도 간편하게 설정할 수 있는 Vercel 배포 환경에서 재배포",
          ],
        },
      ],
      insight: [
        "커스텀 훅을 생성하여 제대로 활용해 보지 못했는데, 한 컴포넌트 내에 중복적으로 사용되는 useEffect 훅을 커스텀 훅으로 만들어 코드의 중복을 줄일 수 있었음",
        "프로젝트의 규모가 크지 않아서 빌드 시 React+Vite와 Create-React-App의 차이가 확연하게 드러나진 않았으나, 처음 프로젝트를 생성할 때와 패키지를 설치할 때의 체감 속도는 확실히 Vite가 더 빨랐고, 가벼웠음",
        "LightHouse로 측정 시 Performance,Best Practices가 100점, SEO가 90점으로 측정되어 React에서 Next.js로 마이그레이션 하는 것은 고려해 볼 필요가 있을 것 같고, React에서 SEO 점수를 더 높일 수 있는 방안을 모색해보려고 함",
        "Github pages와 Vercel의 배포 환경을 비교할 수 있었는데, Github pages는 배포자동화 작업 시 workflow를 따로 설정해주어야 하는 반면, Vercel은 레포지토리와 연동하여 merge만 되면 배포가 바로 반영됐음, 상세 부분은 따로 설정해주어야 하지만, Vercel의 강력함과 편리함을 체감할 수 있었음",
        "atomic design pattern을 프로젝트에 적용하여 컴포넌트 관리를 해보았음, 비즈니스 로직을 atoms 요소들에 적용하는 것을 지양하고, 주의해야할 것 같음",
      ],
    },
    link: "https://github.com/mya413/myalog",
  },
];
