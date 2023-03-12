import styled from "styled-components";

export interface ResetButtonStyleProps {
  isResetting: boolean;
}

export const Button = styled.button<ResetButtonStyleProps>`
  position: fixed;
  width: 3.5em;
  height: 3.5em;
  top: 50%;
  left: 50%;
  margin-top: -1.75em;
  margin-left: -1.75em;
  border-radius: 100%;
  border: 4px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    width: 23px;
    height: 23px;

    &.times {
      transform: scale(${({ isResetting }) => isResetting ? 1 : 0});
    }

    &.undo {
      padding-left: 1px;
      transform: scale(${({ isResetting }) => isResetting ? 0 : 1});
    }

    transition: transform 0.2s;
  }
`;
