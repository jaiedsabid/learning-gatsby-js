import React from 'react';
import styled from "styled-components";

export default function Greetings(props) {
    return (
        <P>Hello <span>{props.name}</span>!</P>
    );
}

const P = styled.p `
    color: darkcyan;
    & span {
      font-weight: 800;
    }
`;