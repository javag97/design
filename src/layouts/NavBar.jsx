import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.svg';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a, p, img {
    color: ${props => props.theme.colors.white.base};
    margin: 0rem 1rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const divContainer = {
   width: '100%',
   display: 'flex',
   justifyContent: 'center'

 };


const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/" style = {divContainer}>
      <img src={logo} alt="Javier's Logo" />
    </StyledLink>
    <Nav>
      <Link to="/">Portfolio</Link>
      <Link to="/about">About</Link>
    </Nav>
  </Headroom>
);

export default NavBar;
