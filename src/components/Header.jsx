import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 16px;
  background-color: #222e3c;
  color: white;
  text-align: left;

  @media (max-width: 750px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-bottom: 8px;
  font-size: calc(20px + 1vmin);
`;

const Subtitle = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: calc(12px + 0.4vmin);
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Varuni Gupta</Title>
    <Subtitle>My Online Resume</Subtitle>
  </HeaderWrapper>
);

export default Header;
