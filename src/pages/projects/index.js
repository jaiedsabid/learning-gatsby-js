import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import {graphql, Link} from "gatsby";

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
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        slug
        stack
        title
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