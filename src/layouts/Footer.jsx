import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  a {
    color: #ffffff;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        <a href="https://www.linkedin.com/in/javigme/">LinkedIn</a> –{' '}
        <a href="https://github.com/javag97">Github</a> –{' '}
        <a href="mailto:jgarcme@gmail.com">Email</a>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
