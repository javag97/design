import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from "gatsby"

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: 2rem;
  bottom: 0;
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
  a{
    color: #ffffff;
  }
`;


const Footer = () => (
  <StaticQuery
    query={graphql`
    query FooterQuery{
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              path
            }      
          }
        }
      }
    }
    `}
    render={ data => (
      <Wrapper>
        <Text>
          {data.allMarkdownRemark.edges.map(({ node }) => 
              <Link key={node.id}
              to={node.frontmatter.path}>
                 {node.frontmatter.title} 
              </Link>
          )}
        </Text>
      </Wrapper>
    )
  }
  />
  );
export default Footer;

