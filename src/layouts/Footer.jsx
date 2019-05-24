import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: 2rem;
  bottom: 0;
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  a{
    color: #ffffff;
  }
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        <a href="mailto:jgarcme@gmail.com">Email Me: jgarcme@gmail.com</a> {' — '}
        <a target="_blank" href="https://github.com/javag97">Github</a> {' — '}
        <a href="https://www.linkedin.com/in/javigme/">LinkedIn</a>
      </span>
    </Text>
  </Wrapper>
);
export default Footer;
