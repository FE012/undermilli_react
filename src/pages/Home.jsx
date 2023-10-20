import styled from "styled-components";
import Header from "../Components/Header";
import backImg from "../images/background.png";

const Wrapper = styled.div`
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
  color: var(--white-color);
`;

const Main = styled.main`
  padding: 200px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: var(--title-font);
    font-weight: var(--bold-weight);
    margin-bottom: 70px;
  }

  p {
    font-size: var(--caption-font);
    line-height: 1.3;
    width: 60vw;
  }
`;

function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <h1>이런 공간이 있다면 어떨까요...</h1>
          <p>
            ...학교 동아리, 게임 그룹, 세계 예술 감상 커뮤니티에 소속되어
            유대감을 느낄 수 있는 공간. 소중한 단짝 친구들과 어울릴 수 있는
            우리만의 공간. 더 쉽게, 매일 어울리고 이야기할 수 있는 그런 공간
            말이에요.
          </p>
        </Main>
      </Wrapper>
    </>
  );
}

export default Home;
