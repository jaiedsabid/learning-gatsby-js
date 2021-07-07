import * as React from 'react';
import {Link} from 'gatsby';
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css';

const IndexPage = () => {
    return (
        <Layout>
            <section className={styles.header}>
                <div>
                    <h2>Design</h2>
                    <h3>Develop & Deploy</h3>
                    <p>Turn your ideas into a perfect web application.</p>
                    <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
                </div>
                <img src="/banner.png" alt="Banner" style={{maxWidth: "100%"}}/>
            </section>
        </Layout>
    )
}


export default IndexPage;