import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

const Content = styled.div`
  text-align: ${props => (props.center ? 'center' : '')};
  margin: auto;
  padding: 3rem 0.5rem;
  width: 53%;
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

const Resume = () => {
  return (
    <Layout>
      <Helmet title={'UX Design Portfolio of Javier Garcia'} />
      <Header title="" />

      <Content>
        <p>
          <a href="http://bit.ly/javiergarciaresume" target="_blank">
            Open PDF in a new window.
          </a>
        </p>
        <h1>Education</h1>
        <p>
          California Polytechnic State University, San Luis Obispo
          <br /> Bachelor of Science: Graphic Communication
          <br />
          Expected Graduation Date: June 2019
          <br />
          Web and Digital Media Concentration
          <br />
          Minor: Computer Science Minor
        </p>
        <h1>Experience</h1>
        <h2>
          Web Development Intern | Cal Poly Corporation
          <br />
          April 2018–Present
        </h2>
        <p>
          Migrated pattern library to create consistency and increase
          documentation within web components
          <br />
          Improved browser support for mobile and older browsers
          <br />
          Created dynamic dining menu webpage using Chartswell API
        </p>
        <h2>
          Web Designer & PR Lead | PolySat Cal Poly
          <br />
          April 2017–January 2018
        </h2>
        <p>
          Established and manage Public Relations team within research lab
          <br />
          Assessed data analytics to guide website landing page changes
        </p>
        <h2>
          Student Technician | ITS Services Cal Poly
          <br />
          March 2017–October 2017
        </h2>
        <p>
          Diagnosed and repaired broken technology equipment across buildings
          <br />
          Articulated technical details to students and faculty
          in layman’s terms
        </p>
        <h1>Leadership</h1>
        <h2>
          Experience Director & Web Developer | Camp PolyHacks
          <br />
          September 2017–January 2018, July 2018 – Present
        </h2>
        <p>
          Collaborated with design team in brand refresh by conducting user
          interviews and creating personas
          <br />
          Promoted move towards making site open source
          <br />
          Designed JAMstack website architecture over two years
        </p>
        <h2>
          Media Officer & Adobe Brand Ambassador | Mat Pica Pi
          <br />
          September 2017–May 2018
        </h2>
        <p>
          Photographed events and assisted in design collateral <br />
          Fostered a community of creative individuals and empowered them by
          offering Adobe products for free
        </p>
        <h1>Skills</h1>
        <h2>Development | Development</h2>
        <p>
          HTML, CSS, Javascript, React, Git, Serverless Architecture, Swift,
          Java, C<br /> User Experience, Prototyping, Typography, Visual Design{' '}
        </p>
      </Content>
    </Layout>
  );
};

export default Resume;
