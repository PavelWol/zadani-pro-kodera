import React from "react";
import styled from "styled-components";

const Container = styled.header`
  background: rgba(0, 0, 0, 0.8);
  padding: 10px 16px 10px 16px;
  border: 1px solid lightgrey;
`;

const Logo = styled.div`
  background: grey;
  padding: 8px;
  width: 50%;
  margin: 0 auto 0 0;
  border-radius: 5px;
`;
const HeadingH3 = styled.h3`
  color: white;
  margin: 0;
  font-family: Sans-serif;
`;

function Header() {
  return (
    <Container>
      <Logo>
        <HeadingH3>LOGO</HeadingH3>
      </Logo>
    </Container>
  );
}

export default Header;
