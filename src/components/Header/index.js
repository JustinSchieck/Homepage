import React from 'react';
import styled from 'styled-components';

const RootDiv = styled.div`
    height: 500px;
    background-color: grey;
`;

const Image = styled.img`
    max-height: 200px;
`;

const Header = () => {
    return (<RootDiv>
        <Image src="../me.png" alt="portfolio" />
    </RootDiv>);
};

export default Header;