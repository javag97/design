import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import portrait from '../images/photo.jpg';
import TwoColumn from '../layouts/TwoColumn';

const Text = styled.div`
   img {
      max-height: 16em;
      padding-right: 3em;
   }
   display: flex;

   @media (max-width: ${props => props.theme.breakpoints.m}) {
      display: block;
   }
   @media (max-width: ${props => props.theme.breakpoints.s}) {
      display: block;
   }
`;

const Contact = center => (
   <Layout>
      <Helmet title={'Javier Garcia — Contact Me!'} />
      <Header title="" />
      <TwoColumn>
         <Text>
            <img src={portrait} alt="Picture of Javier Garcia" />
            <div>
               <h1>
                  Current gig: UI/UX Intern @{' '}
                  <a href="https://www.jupyter.org/" target="_blank">Jupyter</a>
               </h1>
               <p>
                  He/him/his. Designer, programmer, pop culture and technology
                  nerd, matcha enthusiast, lifelong learner. Seeking full-time
                  opportunities as a Product Designer that empower me to give
                  back.
               </p>
               <h3>Contact Me </h3>
               <p>Stay updated on what I'm doing on {' '}
                   <a href="https://www.linkedin.com/in/javigme" target="_blank">
                     LinkedIn
                  </a>
                  {' '} and {' '}
                  <a href="https:///github.com/javag97" target="_blank">
                     Github
                  </a>.<br/>
                  For any inquiries, feel free to email me at
                  {' '}
                  <a href="mailto:javier.garcia549@gmail.com">
                     javier.garcia549@gmail.com
                  </a>
                  .
               </p>
               <iframe src="https://open.spotify.com/embed/playlist/61KudAxwNRzpWrg839LdgN" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
         </Text>
      </TwoColumn>
   </Layout>
);

export default Contact;

Container.propTypes = {
   center: PropTypes.object,
};
