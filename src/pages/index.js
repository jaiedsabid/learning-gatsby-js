import * as React from 'react';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <main>
            <title>Home Page</title>
            <h1>Welcome to my Gatsby site!</h1>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
            />
            <Link to="/about">About</Link>
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </main>
    )
}
export default IndexPage;