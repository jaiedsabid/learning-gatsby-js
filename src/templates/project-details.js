import React from 'react';
import Layout from '../components/Layout';
import {GatsbyImage} from 'gatsby-plugin-image';
import * as styles from '../styles/project-details.module.css';

function ProjectDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h2></h2>
                <h3></h3>
                <div className={styles.featured}>
                    {/*<GatsbyImage alt={} image={}/>*/}
                </div>
                    {/*<div className={styles.html} dangerouslySetInnerHTML={}/>*/}
            </div>
        </Layout>
    );
}

export default ProjectDetails;