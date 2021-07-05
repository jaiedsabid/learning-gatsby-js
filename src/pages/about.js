import React from 'react';
import {Link, graphql} from 'gatsby';
import styled from "styled-components";


export default function About({data}) {

    return (
        <React.Fragment>
            <div>
                <H1>About <span>this app</span></H1>
                <div id="details">
                    <p>Site title: {data.site.siteMetadata.title}</p>
                    <p>Site description: {data.site.siteMetadata.description}</p>
                    <p>Site author: {data.site.siteMetadata.author}</p>
                </div>
                <p>
                    <Link to="/">Back to <b>Home</b></Link>
                </p>
            </div>
        </React.Fragment>
    );
}

export const query = graphql `
    query{
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;

const H1 = styled.h1`
  color: #262626;
  font-size: 3rem;

  & span {
    color: darkblue;

    & :hover {
      color: tomato;
      transition: color 0.3s ease;
    }
  }
`;