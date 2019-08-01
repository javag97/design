import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';

const PostWrapper = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 6rem 4rem 5rem 4rem;
   @media (max-width: 1000px) {
      margin: 4rem 2rem 1rem 2rem;
   }
   @media (max-width: 700px) {
      margin: 4rem 1rem 1rem 1rem;
   }
`;

const Index = ({ data }) => {
   const { edges } = data.allMarkdownRemark;
   return (
      <Layout>
         <Helmet title={'Product Design Portfolio of Javier Garcia'} />
         <Header />
         <PostWrapper>
            {edges.map(({ node }) => (
               <PostList
                  key={node.id}
                  cover={node.frontmatter.cover.childImageSharp.fluid}
                  path={node.frontmatter.path}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.frontmatter.excerpt}
               />
            ))}
         </PostWrapper>
      </Layout>
   );
};

export default Index;

Index.propTypes = {
   data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
         edges: PropTypes.arrayOf(
            PropTypes.shape({
               node: PropTypes.shape({
                  frontmatter: PropTypes.shape({
                     cover: PropTypes.object.isRequired,
                     path: PropTypes.string.isRequired,
                     title: PropTypes.string.isRequired,
                     date: PropTypes.string.isRequired,
                     tags: PropTypes.array,
                     excerpt: PropTypes.string,
                  }),
               }),
            }).isRequired
         ),
      }),
   }),
};

export const query = graphql`
   query {
      allMarkdownRemark(
         limit: 6
         sort: { order: DESC, fields: [frontmatter___date] }
      ) {
         edges {
            node {
               id
               frontmatter {
                  title
                  path
                  tags
                  date(formatString: "MM.DD.YYYY")
                  excerpt
                  cover {
                     childImageSharp {
                        fluid(
                           maxWidth: 1000
                           quality: 90
                           traceSVG: { color: "#2B2B2F" }
                        ) {
                           ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                     }
                  }
               }
            }
         }
      }
   }
`;
