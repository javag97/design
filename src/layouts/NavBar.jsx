import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Headroom from 'react-headroom';

const StyledLink = styled(Link)`
   display: flex;
   align-items: center;
   font-weight: 700;
   align-items: center;
   color:white;
   text-transform: uppercase;
   letter-spacing: 0.15em;
`;

const Nav = styled.nav`
   display: flex;
   justify-content: flex-end;
   font-family: ${props => props.theme.fontFamily.body};
   font-weight: 500;
   font-size: 1.1rem;
   align-items: center;
   a,
   p,
   img {
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
   paddingTop: '24px',
   display: 'flex',
   justifyContent: 'center',
};

const NavBar = () => (
   <Headroom calcHeightOnResize disableInlineStyles>
      <StyledLink to="/" style={divContainer}>
         <h1>Javier Garcia</h1>
      </StyledLink>
      <Nav>
         <Link to="/">Portfolio</Link>
         <Link to="/contact">Contact</Link>
      </Nav>
   </Headroom>
);

export default NavBar;
