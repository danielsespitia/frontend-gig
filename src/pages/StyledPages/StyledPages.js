import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
`;

export const Aside = styled.div`
  display: inherit;
  justify-content: center;
  flex-basis: 25%;
  min-width: 325px;
  max-width: 375px;
  border-right: 0.5px solid lightgrey;
  border-bottom: 0.5px solid lightgrey;
`;

export const Main = styled.div`
  background-color: #f5f7fa;
  display: inherit;
  justify-content: center;
  flex: 1;
`;

export const ActionButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding: 0;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    rgba(23, 205, 212, 1) 0%,
    rgba(130, 98, 199, 1) 100%
  );
  color: white;
  &:hover {
    color: #8262c7;
    border: #8262c7 solid 1px;
    background: #fff;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;

    opacity: 0.5;
  }
`;

export const ActionButtonContainer = styled.div`
  ${ActionButton}:hover & {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
