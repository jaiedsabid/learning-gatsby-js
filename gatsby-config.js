module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "My Portfolio",
        description: `Portfolio site developed by Jaied Al Sabid`,
        author: `@jaiedsabid`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        }
    ],
};
