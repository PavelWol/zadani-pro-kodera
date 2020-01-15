import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: white;
  border: 1px solid lightgrey;
`;

const Paragraph = styled.p`
  margin: 0;
  color: grey;
  font-family: Sans-serif;
  font-size: 12px;
`;

const Paragraph2 = styled.p`
  margin: 0;
  color: blue;
  font-family: Sans-serif;
  font-size: 12px;
`;

function Footer() {
  return (
    <Container>
      <Paragraph2>Uživatelé</Paragraph2>
      <Paragraph>Licence</Paragraph>
      <Paragraph>Export</Paragraph>
      <Paragraph>Nápověda</Paragraph>
    </Container>
  );
}

export default Footer;
