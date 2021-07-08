import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import {graphql, Link} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

export default function Index({data}) {
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects & Websites I've Created</h3>
                <div className={styles.projects}>
                    {
                        projects.map(project => (
                            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
                                <div>
                                    <GatsbyImage image={project.frontmatter.thumb.childImageSharp.gatsbyImageData}
                                                 alt={project.title}
                                    />
                                    <h3>{project.frontmatter.title}</h3>
                                    <p>{project.frontmatter.stack}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <p>Like what you see? Email me at {contact} for a quote!</p>
            </div>
        </Layout>
    );
}

export const data = graphql`
{
  projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            gatsbyImageData(formats: AUTO, quality: 50)
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
        contact
    }
  }
}
`;