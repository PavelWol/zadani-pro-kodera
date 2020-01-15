import React from "react";
import styled from "styled-components";

const TableButton = styled.button`
  margin: 0;
  background: #4bab33;
  border-radius: 5px;
  font-family: Sans-serif;
  font-size: 14px;
  border: none;
  color: white;
  cursor: pointer;
`;

function ButtonCreate() {
  return <TableButton>+ vytvořit uživatele</TableButton>;
}

export default ButtonCreate;
