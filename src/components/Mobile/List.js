import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px 8px 20px;
  background: white;
  border: 1px solid lightgrey;
`;

const Paragraph = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 6px 8px;
  font-family: Sans-serif;
  font-size: 14px;
`;
const ParagraphBg = styled.p`
  margin: 0;
  background: yellowgreen;
  padding: 4px 8px;
  border-radius: 5px;
`;

function List() {
  return (
    <Container>
      <Paragraph>Seznam uživatelských účtů</Paragraph>
      <ParagraphBg>+</ParagraphBg>
    </Container>
  );
}

export default List;
