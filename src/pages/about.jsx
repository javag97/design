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
    <Helmet title={'About | UX Design Portfolio of Javier Garcia'} />
    <Header title=""></Header>
    <Container center={center}>

      <Text>
      <img src={portrait} alt="Picture of Javier Garcia" />
        <h3>He/him/his. Designer, technology nerd, DIY enthusiast, lifelong learner. Seeking full-time opportunities within Product Designer that enpower me to give back.</h3>


        <h3>Current gigs:  <a href ="https://www.jupyter.org/">Project Jupyter</a></h3>
     
        <h4>Listening to: <a href="https://open.spotify.com/track/74sfJjVq74bYkxMQoOhH3r?si=UfpUPasaTUC14AXAyo0qjw">Keep Ya Head Up – Jhene Aiko</a></h4>
        <h4>Constantly re-reading : <a href="https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment-ebook/dp/B002361MLA/ref=sr_1_3?ie=UTF8&qid=1544561411&sr=8-3&keywords=the+power+of+now"> The Power of Now – Eckart Tolle</a></h4>
      </Text>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
