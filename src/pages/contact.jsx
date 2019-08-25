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
      <Helmet title={'Javier Garcia Design — Contact Me!'} />
      <Header title="" />
      <TwoColumn>
         <Text>
            <img src={portrait} alt="Picture of Javier Garcia" />
            <div>
               <h1>Current gig: UI/UX Intern @{' '}<a href="https://www.jupyter.org/" target="_blank">Jupyter</a></h1>

               <h2>Purpose</h2>
               <p>Seeking full-time opportunities as a Product Designer that empowers others to better the human condition.</p>

               <h2>Identity</h2>
               <p>He/him/his, designer, programmer, pop culture nerd, gamer, technology & matcha enthusiast.</p>

               <h2>Stay updated on what I'm up to</h2>
               <ul> 
                  <li>
                     <a href="https://www.linkedin.com/in/javigme" target="_blank">
                        LinkedIn
                     </a>
                  </li>
                  <li>
                     <a href="https:///github.com/javag97" target="_blank">
                        Github
                     </a>
                  </li>
                  <li>
                     <a href="https://www.twitter.com/javag97" target="_blank">
                        Twitter
                     </a>
                  </li>
                  <li>
                     <a href="https://www.behance.net/javiergarc2096" target="_blank">
                        Behance
                     </a>
                  </li>
                  <li>
                     <a href="mailto:javier.garcia549@gmail.com">
                        javier.garcia549@gmail.com
                     </a>
                  </li>   
               </ul>
               <h4>In an alternate universe, I produced these sick tracks.</h4>
               <iframe src="https://open.spotify.com/embed/playlist/61KudAxwNRzpWrg839LdgN" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
         </Text>
      </TwoColumn>
   </Layout>
);

export default Contact;

Container.propTypes = {
   center: PropTypes.object,
};
