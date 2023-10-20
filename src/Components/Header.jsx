import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: 0px 40px;
  align-items: center;
  height: 80px;
`;

const LeftSection = styled.section`
  flex: 20%;
  display: flex;
  justify-content: end;
  img {
    width: 120px;
  }
`;

const CenterSection = styled.section`
  flex: 60%;
  display: flex;
  justify-content: center;
`;
const RightSeciton = styled.section`
  flex: 20%;
  display: flex;
  justify-content: baseline;
`;

const Items = styled.ul`
  display: flex;
  font-size: var(--main-font);
  font-weight: var(--bold-weight);
`;

const Item = styled.li`
  margin: 15px;
`;

const NavButton = styled.button`
  border: none;
  border-radius: 40px;
  padding: 10px 16px;
`;

function Header() {
  return (
    <Nav>
      <LeftSection>
        <img src={"http://test.undermilli.com/static/logo.svg"} alt="logo" />
      </LeftSection>
      <CenterSection>
        <Items>
          <Item>Download</Item>
          <Item>Nitro</Item>
          <Item>Discover</Item>
          <Item>Safety</Item>
          <Item>Support</Item>
          <Item>Blog</Item>
          <Item>Careers</Item>
        </Items>
      </CenterSection>
      <RightSeciton>
        <NavButton>Open Discord</NavButton>
      </RightSeciton>
    </Nav>
  );
}

export default Header;
