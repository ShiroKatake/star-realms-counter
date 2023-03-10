import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.div`
  position: absolute;
  pointer-events:none;
  font-size: 7rem;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 25vh;
`;
