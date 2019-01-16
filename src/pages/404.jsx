import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'Invalid Page'} />
    <Header title="Well, that's not what I expected." />
    <Container center={center}>
      <h3>This page does not exist or is no longer reachable.</h3>
      <h3>
        Return to <Link to="/">Safety</Link>.
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

Container.propTypes = {
  center: PropTypes.object,
};
