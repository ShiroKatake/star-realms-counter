import styled from "styled-components";

interface UseWindowWidth {
  windowWidth: number;
}

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const Column = styled.div<UseWindowWidth>`
  height: ${({ windowWidth }) => 50 * windowWidth}px;
  width: 100%;
`;
