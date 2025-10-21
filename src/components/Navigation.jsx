import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledNav = styled.nav`
  width: 30%;
  max-width: 300px;
  background-color: #34495e;
  border-top: 1px solid white;

  @media (max-width: 750px) {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0px;
  margin: 0;
  gap: 2px;
  font-size: calc(13px + 0.1vmin);

  @media (max-width: 750px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    background-color: #2a3a4b;
    cursor: pointer;
  }

  @media (max-width: 750px) {
    padding: 0;
    i {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;

  &.active {
    background-color: #1b2530;
    padding: 10px;
  }

  @media (max-width: 750px) {
    i {
      display: none;
    }
  }
`;

const navItems = [
  { path: "/", icon: "fa-solid fa-house", label: "Home" },
  { path: "/education", icon: "fa-solid fa-address-card", label: "Education" },
  { path: "/experience", icon: "fa-solid fa-briefcase", label: "Experience" },
  { path: "/skills", icon: "fa-solid fa-code", label: "Skills" },
  { path: "/projects", icon: "fa-solid fa-diagram-project", label: "Projects" },
  {
    path: "/certifications",
    icon: "fa-solid fa-award",
    label: "Certification",
  },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <StyledNav>
      <StyledUl>
        {navItems.map((item, index) => (
          <StyledLi key={index}>
            <StyledLink
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <i className={item.icon}></i> {item.label}
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
