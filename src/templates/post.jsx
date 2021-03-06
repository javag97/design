import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { TagsBlock, Header, SEO } from 'components';
// import Header from '../components/Header';
// import Container from '../layouts/Container';
// import Content from '../layouts/Content';
// import SEO from '../components/SEO';
import '../styles/prism';

const SuggestionBar = styled.div`
   display: flex;
   flex-wrap: nowrap;
   justify-content: space-between;
   background: ${props => props.theme.colors.white.light};
   box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
   display: flex;
   align-items: center;
   margin: 1rem 3rem 0 3rem;
`;

const Post = ({ data, pageContext }) => {
   const { next, prev } = pageContext;
   const post = data.markdownRemark;
   const image = post.frontmatter.cover.childImageSharp.fluid;
   const title = post.frontmatter.title;
   const date = post.frontmatter.date;
   const html = post.html;
   return (
      <Layout>
         <SEO
            title={'Javier Garcia Design — ' + title}
            description={post.frontmatter.description || post.excerpt || ' '}
            image={image}
            pathname={post.frontmatter.path}
            article
         />
         <Header title={title} date={date} cover={image} />
         <Container>
            <Content input={html} />
            <TagsBlock list={post.frontmatter.tags || []} />
         </Container>
         <SuggestionBar>
            <PostSuggestion>
               {next && (
                  <Link to={next.frontmatter.path}>
                     Previous
                     <h3>{next.frontmatter.title}</h3>
                  </Link>
               )}
            </PostSuggestion>
            <PostSuggestion>
               {prev && (
                  <Link to={prev.frontmatter.path}>
                     Next
                     <h3>{prev.frontmatter.title}</h3>
                  </Link>
               )}
            </PostSuggestion>
         </SuggestionBar>
      </Layout>
   );
};

export default Post;

Post.propTypes = {
   pageContext: PropTypes.shape({
      prev: PropTypes.object,
      next: PropTypes.object,
   }).isRequired,
   data: PropTypes.object.isRequired,
};

export const query = graphql`
   query {
      markdownRemark {
         html
         frontmatter {
            date
            title
            tags
            cover {
               childImageSharp {
                  fluid(
                     maxWidth: 1920
                     quality: 90
                  ) {
                     ...GatsbyImageSharpFluid_withWebp
                  }
                  resize(width: 1200, quality: 90) {
                     src
                  }
               }
            }
         }
      }
   }
`;
