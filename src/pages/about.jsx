import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import portrait from "../images/photo.jpg"

const Text = styled.div`
  

  img{
    max-height: 300px;
  }
`;


const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About me.">UX Designer from San Diego.</Header>
    <Container center={center}>

      <Text>
      <img src={portrait} alt="Picture of Javier Garcia" />
        <h3>
        Born and raised in National City (San Diego), California as a first generation Mexican American.
        I help purpose-driven organizations solve technology problems by using creative problem solving to explore what works best for others. My hope is that others are inspired by such process to make a more functional society.        	
        </h3>
      </Text>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
