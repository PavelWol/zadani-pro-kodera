import React from "react";
import styled from "styled-components";
import SelectDrop from "../Desktop/SelectDrop.js";
import ButtonDetail from "../Desktop/ButtonDetail.js";
import Checkbox from "../Desktop/Checkbox.js";
import ButtonCreate from "../Desktop/ButtonCreate.js";

const Container = styled.div`
  background: white;
  border: 1px solid lightgrey;
  margin: 16px;
  padding: 8px;
  width: 80%;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Chair = styled.table`
  width: 100%;
  margin-top: 10px;
  border-collapse: collapse;
  border-spacing: 10px;
  padding-top: 10px;
`;

const TrBlack = styled.tr`
  background: black;
  color: white;
`;

const TrGrey = styled.tr`
  background: #f7f7f7;
`;

const Cell = styled.td`
  border: 1px solid lightgrey;
  padding: 4px 6px 4px 12px;
  margin: 0;
  font-size: 14px;
  font-family: Sans-serif;
`;

const CellButton = styled.p`
  margin: 0;
  font-family: Sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Paragraph = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 10px;
  font-family: Sans-serif;
  font-size: 14px;
`;

function Chart() {
  return (
    <Container>
      <Container2>
        <Container2>
          <Paragraph>pro vybrané uživatelé</Paragraph>
          <SelectDrop />
        </Container2>
        <ButtonCreate />
      </Container2>
      <Chair>
        <tbody>
          <TrBlack>
            <Cell>
              <Checkbox />
            </Cell>
            <Cell>ID</Cell>
            <Cell>Email</Cell>
            <Cell>Jméno</Cell>
            <Cell>Licence</Cell>
          </TrBlack>
          <TrGrey>
            <Cell>
              <Checkbox />
            </Cell>
            <Cell>1234536</Cell>
            <Cell>
              <a href="slosar@arlasgroup.cz">slosar@arlasgroup.cz</a>
            </Cell>
            <Cell>Martin Šlosar</Cell>
            <Cell>
              <CellButton>
                Licence 1, Licence 2<ButtonDetail />
              </CellButton>
            </Cell>
          </TrGrey>
          <tr>
            <Cell>
              <Checkbox />
            </Cell>
            <Cell>4326778</Cell>
            <Cell>
              <a href="mailto:rehak@atlasgroup.cz">rehak@atlasgroup.cz</a>
            </Cell>
            <Cell>Tomáš Řehák</Cell>
            <Cell>
              <CellButton>
                Licence 3<ButtonDetail />
              </CellButton>
            </Cell>
          </tr>
          <TrGrey>
            <Cell>
              <Checkbox />
            </Cell>
            <Cell>4125367</Cell>
            <Cell>
              <a href="mailto:orlik@atlasgroup.cz">orlik@atlasgroup.cz</a>
            </Cell>
            <Cell>Vojta Orlík</Cell>
            <Cell>
              <CellButton>
                Licence 2<ButtonDetail />
              </CellButton>
            </Cell>
          </TrGrey>
          <tr>
            <Cell>
              <Checkbox />
            </Cell>
            <Cell>2135538</Cell>
            <Cell>
              <a href="mailto:novak@atlasgroup.cz">novak@atlasgroup.cz</a>
            </Cell>
            <Cell>Petr Novák</Cell>
            <Cell>
              <CellButton>
                Licence 2, Licence 3<ButtonDetail />
              </CellButton>
            </Cell>
          </tr>
        </tbody>
      </Chair>
    </Container>
  );
}

export default Chart;
