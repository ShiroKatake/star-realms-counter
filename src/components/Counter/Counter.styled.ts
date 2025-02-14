import styled, { css } from "styled-components";
import { Counter } from "./Counter";
import { LongPressButton } from "components/LongPressButton/LongPressButton";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.div`
  position: absolute;
  pointer-events: none;
  padding-bottom: 10px;
  font-size: 7rem;
`;

interface IncrementalValueProps {
  isFading: boolean;
}

export const IncrementalValue = styled.div<IncrementalValueProps>`
  position: absolute;
  bottom: 30%;
  font-size: 1.75em;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.01s;

  ${({ isFading }) =>
    isFading &&
    css`
      opacity: 0;
      transition: opacity 1.7s cubic-bezier(0.1, 0.56, 0.26, 0.86);
    `}
`;

interface ButtonStyleProps {
  windowWidth: number;
}

export const Button = styled(LongPressButton)<ButtonStyleProps>`
  display: block;
  width: 100%;
  height: ${({ windowWidth }) => 25 * windowWidth}px;
  border: 6px solid black;
  border-radius: 15px;
`;

export interface ResetButtonStyleProps {
  isResetting: boolean;
}

export const ResetButton = styled.button<ResetButtonStyleProps>`
  position: absolute;
  top: 2.5em;
  left: 10px;
  margin-top: -50px;
  width: 50px;
  height: 50px;
  font-size: 1.5em;
  background: none;
  border: none;
  transform: scale(${({ isResetting }) => (isResetting ? 1 : 0)});
  transition: transform 0.2s ease;

  svg {
    padding-top: 5px;
    fill: white;
  }
`;

export const DamageCounter = styled(Counter)`
  ${Button} {
    background-color: ${(props) => props.theme.colors.damage};
    border-bottom: 3px solid black;
    border-right: 3px solid black;

    &:nth-child(2) {
      border-bottom: 3px solid black;
      border-top: 3px solid black;
    }
  }
`;

export const TradeCounter = styled(Counter)`
  ${Button} {
    background-color: ${(props) => props.theme.colors.trade};
    border-bottom: 3px solid black;
    border-left: 3px solid black;

    &:nth-child(2) {
      border-bottom: 3px solid black;
      border-top: 3px solid black;
    }
  }
`;

export const AuthorityCounter = styled(Counter)`
  ${Button} {
    background-color: ${(props) => props.theme.colors.authority};
    border-top: 3px solid black;

    &:nth-child(1) {
      border-bottom: 3px solid black;
    }
  }
`;
