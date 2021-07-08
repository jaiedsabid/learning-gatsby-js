import * as React from "react";
import Layout from "../components/Layout";


const NotFoundPage = () => {
  return (
    <Layout title="404 Not Found">
      <title>404 Not found</title>
        <div>
            <h2>404</h2>
            <p>Sorry, that page doesn't exist (yet)!</p>
        </div>
    </Layout>
  )
}

export default NotFoundPage;
