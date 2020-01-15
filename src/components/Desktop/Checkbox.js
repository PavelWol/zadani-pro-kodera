import React from "react";
import styled from "styled-components";

const Inputcheck = styled.input`
  cursor: pointer;
`;

function Checkbox() {
  return (
    <label>
      <Inputcheck type="checkbox"></Inputcheck>
    </label>
  );
}

export default Checkbox;
