import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';

const Tags = ({ pageContext }) => {
   const { tags } = pageContext;
   console.log(pageContext);
   return (
      <Layout>
         <Container>
            <TagsBlock list={tags} />
         </Container>
      </Layout>
   );
};

export default Tags;

Tags.propTypes = {
   pageContext: PropTypes.shape({
      tags: PropTypes.array,
   }),
};
