import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #283745;
`;

const Logo = styled.div`
  padding: 16px 40px 16px 40px;
  border-bottom: 1px solid grey;
`;

const HeadingH1 = styled.h1`
  background: grey;
  padding: 20px;
  margin: 0;
  font-family: Sans-serif;
  font-size: 32px;
  border-radius: 5px;
  color: white;
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 16px 10px 0 10px;
  font-family: Sans-serif;
  font-size: 14px;
  color: white;
`;

function SideMenu() {
  return (
    <Container>
      <Logo>
        <HeadingH1>LOGO</HeadingH1>
      </Logo>
      <div className="nav">
        <Paragraph>Uživatelé</Paragraph>
        <Paragraph>Licence</Paragraph>
        <Paragraph>Export</Paragraph>
        <Paragraph>Nápověda</Paragraph>
      </div>
    </Container>
  );
}

export default SideMenu;
