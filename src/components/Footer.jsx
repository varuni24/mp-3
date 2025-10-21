import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 16px;
  text-align: center;
  background-color: #222e3c;
  color: white;
  font-size: calc(12px + 0.3vmin);
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: underline;
  font-size: calc(12px + 0.3vmin);

  &:hover {
    color: #5b7693;
    cursor: pointer;
  }
`;

const Footer = () => (
  <FooterWrapper>
    © 2025 All Rights Reserved by Varuni Gupta |{" "}
    <FooterLink href="#">Credits</FooterLink>
  </FooterWrapper>
);

export default Footer;
