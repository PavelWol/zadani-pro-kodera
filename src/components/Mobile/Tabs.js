import React from "react";
import styled from "styled-components";

const ContainerWrap = styled.div`
  margin: 0 0 12px 0;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 0 12px;
  background: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 12px 0;
  border-radius: 2px;
`;

const Container2 = styled.div`
  display: flex;
  background-color: white;
  padding: 6px 0 10px 0;
  border-bottom: 1px solid lightgrey;
`;

const Container3 = styled.div`
  display: flex;
  background-color: white;
  padding: 10px 0 10px 0;
`;

const Link = styled.a`
  color: blue;
  font-family: Sans-serif;
  font-weight: 600;
`;

const ParagraphBold = styled.p`
  margin: 0;
  font-weight: bold;
  padding-right: 20px;
  font-family: Sans-serif;
  font-size: 12px;
`;

const ParagraphLight = styled.p`
  margin: 0;
  font-family: Sans-serif;
  font-size: 12px;
`;

const Paragraph = styled.p`
  margin: 0;
  font-weight: bold;
  font-family: Sans-serif;
  font-size: 12px;
`;

function Tabs() {
  return (
    <ContainerWrap>
      <Container>
        <Link href="mailto:slosar@atlasgroup.cz">slosar@atlasgroup.cz</Link>
        <Paragraph>ID 123456</Paragraph>
      </Container>
      <Container2>
        <ParagraphBold>Jméno</ParagraphBold>
        <ParagraphLight>Martin Šlosar</ParagraphLight>
      </Container2>
      <Container3>
        <ParagraphBold>Licence</ParagraphBold>
        <ParagraphLight>Licence 1, Licence 2</ParagraphLight>
      </Container3>
    </ContainerWrap>
  );
}

export default Tabs;
