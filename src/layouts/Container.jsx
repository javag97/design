import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
   text-align: ${props => (props.center ? 'center' : '')};
   margin: auto;
   padding: 3rem 0.5rem;
   width: 40%;
   max-width: 1000px;
   @media (max-width: ${props => props.theme.breakpoints.l}) {
      width: 60%;
      margin: 0% 30% 0% 30%;
   }
   @media (max-width: ${props => props.theme.breakpoints.m}) {
      width: 75%;
      margin: auto;
   }
   @media (max-width: ${props => props.theme.breakpoints.s}) {
      width: 95%;
      margin: auto;
   }
   max-width: ${props => props.theme.layout[props.type]};
   height: 100%;
   flex: 1;
`;

const Container = ({ children, type, className, center }) => (
   <Wrapper className={className} type={type} center={center}>
      {children}
   </Wrapper>
);

export default Container;

Container.propTypes = {
   children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
   type: PropTypes.string,
   className: PropTypes.string,
   center: PropTypes.object,
};
