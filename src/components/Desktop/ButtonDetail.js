import React from "react";
import styled from "styled-components";

const Button = styled.a`
  background: #f7f7f7;
  border: 1px solid lightgrey;
  padding: 8px;
  cursor: pointer;
`;

function ButtonDetail() {
  return <Button>Detail</Button>;
}

export default ButtonDetail;
