import React from 'react';
import styled from 'styled-components';

const RootDiv = styled.div`
`;

const BackgroundDiv = styled.div`
    height: 100vh;
    background-color: pink;
`;

const AboutPage = () => {

    return (
        <RootDiv>
            <BackgroundDiv>About</BackgroundDiv>
        </RootDiv>
    )

};

export default AboutPage;