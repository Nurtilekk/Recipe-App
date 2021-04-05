import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Container } from "@material-ui/core";

export const Navbar = () => {
  return (
    <SHeader>
      <Container>
        <SNavbar>
        <SLogo>
          <NavLink to="/">
            <SLogoImg
              alt="logo"
              src="https://firebasestorage.googleapis.com/v0/b/recipe-app-7442b.appspot.com/o/Logo.svg?alt=media&token=949e68b4-f465-4d28-a685-8dd052ef7df1"
            />
            Recipe App
          </NavLink>
        </SLogo>
        <SMenuItems>
          <SMenuItem>
            <NavLink activeClassName="active" exact to="/">
              Home
            </NavLink>
          </SMenuItem>
          <SMenuItem>
            <NavLink activeClassName="active" to="/recipes">
              Recipes
            </NavLink>
          </SMenuItem>
          <SMenuItem>
            <NavLink activeClassName="active" to="/chefs">
              Chefs
            </NavLink>
          </SMenuItem>
          <SMenuItem>
            <NavLink activeClassName="active" to="/contacts">
              Contacts
            </NavLink>
          </SMenuItem>
        </SMenuItems>
        </SNavbar>
      </Container>
    </SHeader>
  );
};

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 35px 0;
  border-bottom: 2px solid rgba(256, 256, 256, 0.2);
`;

const SNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SLogo = styled.div`
  width: 50%;
  a {
    display: flex;
    align-items: flex-end;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primary);
  }
`;

const SLogoImg = styled.img`
  margin-right: 5px;
`;

const SMenuItems = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SMenuItem = styled.li`
  a {
    color: #fff;
  }
  a.active {
    color: var(--color-primary);
  }
  a {
    transition: color 0.4s ease; 
  }
`;
