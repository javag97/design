import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Text = styled.div`
    margin: 2rem 10rem;
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Designer & Developer from San Diego.</Header>
    <Container center={center}>
      <Text>
        <h3>
        Born and raised in National City, California as a first generation Mexican-American.
        I help purpose-driven organizations solve technology problems by using creativity and strategy to explore what works best for others. My hope is that others are inspired by such process to make a better society.	
        </h3>
      </Text>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
