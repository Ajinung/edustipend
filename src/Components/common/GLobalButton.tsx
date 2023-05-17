import styled from "styled-components";
import { buttonData } from "../../interface";
import React from "react";

const GLobalButton: React.FC<buttonData> = ({
  name,
  color,
  signDisplay,
  artist,
}) => {
  return (
    <div>
      <Button color={color} signDisplay={signDisplay}>
        {name} <i>{artist}</i> <h2>+</h2>
      </Button>
    </div>
  );
};

export default GLobalButton;

const Button = styled.button<{ color: string; signDisplay: string }>`
  padding: 8px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  margin: 10px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0;
    margin-left: 20px;
    display: ${({ signDisplay }) => signDisplay};
  }
  i {
    margin: 3px;
    font-weight: 600;
  }

  :hover {
    cursor: pointer;
  }
`;
