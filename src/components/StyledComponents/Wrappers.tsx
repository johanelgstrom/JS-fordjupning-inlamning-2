import styled from "styled-components";

export const StyledMainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 530px;
  border-radius: 5px;
  margin: 10px 0 10px 0;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInfoWrapper = styled.div`
  padding: 0 15px 0 15px;
`;

export const StyledSingleAnimalWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const StyledShortInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
