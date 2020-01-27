import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: grey;
  font-family: "Lobster Two", cursive;
  font-size: 30px;
  display: flex;
`;

const SectionDiv = styled.div`
  width: 50%;
`;

const Icon = styled.img`
  max-height: 30px;
  max-width: 30px;
`;

const Link = styled.a`
  padding: 0 10px;
`;

const Footer = () => {
  return (
    <RootDiv>
      <SectionDiv>
        <p>Social Media</p>
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
      </SectionDiv>
      <SectionDiv>
        <p>Contact Form</p>
      </SectionDiv>
    </RootDiv>
  );
};

export default Footer;
