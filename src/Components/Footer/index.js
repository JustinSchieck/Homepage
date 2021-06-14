import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: grey;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  display: flex;
`;

const SectionDiv = styled.div`
  width: 50%;
  display: inline-block;
`;

const LinkWrapper = styled.div`
  margin: 10px 0 20px 0;
`;

const Icon = styled.img`
  max-height: auto;
  max-width: 30px;
`;

const Link = styled.a`
  padding: 0 10px;
  margin: 10px 0;
`;

const SectionTitle = styled.p`
  margin: 10px 0;
`;

const Footer = () => {
  return (
    <RootDiv>
      <SectionDiv>
        <SectionTitle>Social Media</SectionTitle>
        <LinkWrapper>
          <Link href="https://www.facebook.com/justin.s.schieck">
            <Icon src="../facebook.svg" alt="facebook" />
          </Link>

          <Link href="https://twitter.com/darkhollow20">
            <Icon src="../twitter.svg" alt="twitter" />
          </Link>

          <Link href="https://www.linkedin.com/in/justinschieck/">
            <Icon src="../linkedin.svg" alt="linkedin" />
          </Link>

          <Link href="https://www.instagram.com/schiecky/?hl=en">
            <Icon src="../instagram.svg" alt="instagram" />
          </Link>

          <Link href="https://github.com/JustinSchieck">
            <Icon src="../github.svg" alt="github" />
          </Link>
        </LinkWrapper>
      </SectionDiv>
      <SectionDiv></SectionDiv>
    </RootDiv>
  );
};

export default Footer;
