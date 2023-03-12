import styled, { css } from "styled-components";
import { Counter } from "./Counter";

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

const IncrementalValue = styled.div<IncrementalValueProps>`
  position: absolute;
  left: 20%;
  font-size: 1.5em;
  pointer-events: none;
  
  @keyframes fade {
    from {opacity: 1;}
    to {opacity: 0;}
  }

  ${({ isFading }) => isFading && css`
    animation: fade 2.7s;
  `}
`;

export const IncreasingValue = styled(IncrementalValue)`
  top: 30%;
  color: ${(props) => props.theme.colors.increase};
`;

export const DecreasingValue = styled(IncrementalValue)`
  bottom: 30%;
  color: ${(props) => props.theme.colors.decrease};
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 25vh;
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
  transform: scale(${({ isResetting }) => isResetting ? 1 : 0});
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

  ${IncrementalValue} {
    left: 30%;
  }
`;
