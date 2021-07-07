import * as React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';
import {GatsbyImage, getSrcSet} from "gatsby-plugin-image";

const IndexPage = ({data}) => {
    return (
        <Layout>
            <section className={styles.header}>
                <div>
                    <h2>Design</h2>
                    <h3>Develop & Deploy</h3>
                    <p>Turn your ideas into a perfect web application.</p>
                    <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
                </div>
                <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Banner"/>
            </section>
        </Layout>
    )
}

export const data = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(formats: AUTO, quality: 50)
    }
  }
}
`;

export default IndexPage;