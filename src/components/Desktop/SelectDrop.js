import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  padding: 10px;
`;

function SelectDrop() {
  return (
    <Container>
      <select>
        <option value="0">Nastavit roli:</option>
        <option value="1">Role</option>
        <option value="2">Role</option>
        <option value="3">Role</option>
        <option value="4">Role</option>
      </select>
    </Container>
  );
}

export default SelectDrop;
