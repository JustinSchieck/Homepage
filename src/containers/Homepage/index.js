import React from 'react';
import styled from 'styled-components';

const RootDiv = styled.div`
    height: 100vh
`;

const BackgroundDiv = styled.div`
    height: 100%;
    background-color: grey;
`;

const Homepage = () => {

    return (
        <RootDiv>
            <BackgroundDiv>Testing</BackgroundDiv>
        </RootDiv>
    )

};

export default Homepage;