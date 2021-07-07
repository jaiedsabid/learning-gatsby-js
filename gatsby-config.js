module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Web Developer",
        description: `Portfolio site developed by Jaied Al Sabid`,
        author: `@jaiedsabid`,
        copywrite: "This website is copywrite 2021 Web Developer",
        contact: "jaiedsabid1@gmail.com",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-transformer-sharp",
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    formats: [`auto`],
                    quality: 50,
                    breakpoints: [750, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
    ],
};
