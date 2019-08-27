import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
   margin: auto;
   padding: 3rem 0.5rem;
   width: 70%;
   max-width: 1000px;
   @media (max-width: ${props => props.theme.breakpoints.m}) {
      width: 90%;
   }
   @media (max-width: ${props => props.theme.breakpoints.s}) {
      width: 95%;
   }
   max-width: ${props => props.theme.layout[props.type]};
   height: 100%;
   flex: 1;
`;

const TwoColumn = ({ children, type, className }) => (
   <Wrapper className={className} type={type}>
      {children}
   </Wrapper>
);

export default TwoColumn;

TwoColumn.propTypes = {
   children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
   type: PropTypes.string,
   className: PropTypes.string,
   center: PropTypes.object,
};
