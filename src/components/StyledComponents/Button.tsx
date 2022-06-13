import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  background-color: blue;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export const DangerButton = styled(Button)`
  background-color: red;
  cursor: not-allowed;
`;
