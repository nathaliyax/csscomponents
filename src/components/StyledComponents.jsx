import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  background-color: #042069;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
`;

export default function StyledComponent() {
  return (
    <StyledBox>
      <h2>Styled component</h2>
      <p>STYLED COMPONENT MUITO DAHORA</p>
    </StyledBox>
  );
}