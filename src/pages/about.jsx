import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import portrait from '../images/photo.jpg';

const Text = styled.div`
  img {
    max-height: 300px;
  }
`;

const About = center => (
  <Layout>
    <Helmet title={'About | UX Design Portfolio of Javier Garcia'} />
    <Header title="" />
    <Container center={center}>
      <Text>
        <img src={portrait} alt="Picture of Javier Garcia" />
        <h3>
          First-generation Latino from South San Diego, California. Undegrad @
          Cal Poly SLO studying UI/UX and Computer Science. Seeking full-time
          opportunities that allow me to give back to my community.
        </h3>

        <h3>
          Current gigs:{' '}
          <a href="https://www.calpolycorporation.org/">
            Cal Poly Corporation Marketing & Communications
          </a>
          , <a href="http://www.polyhacks./">Camp PolyHacks</a>.
        </h3>

        <h4>
          Listening to:{' '}
          <a href="https://open.spotify.com/track/1OfUOufSXTjhUm5gK33uVN?si=L3kVIniOSnO9ygOxOerAiQ">
            Sativa – Jhene Aiko
          </a>
        </h4>
        <h4>
          Constantly re-reading :{' '}
          <a href="https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment-ebook/dp/B002361MLA/ref=sr_1_3?ie=UTF8&qid=1544561411&sr=8-3&keywords=the+power+of+now">
            {' '}
            The Power of Now – Eckart Tolle
          </a>
        </h4>
      </Text>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
