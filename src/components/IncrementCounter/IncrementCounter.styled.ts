import styled, { css } from "styled-components";

interface IncrementalValueProps {
  isFading: boolean;
}

export const IncrementalValue = styled.div<IncrementalValueProps>`
  position: absolute;
  left: 20%;
  font-size: 1.5em;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.01s;

  ${({ isFading }) => isFading && css`
    opacity: 0;
    transition: opacity 3.1s cubic-bezier(.1,.56,.26,.86);
  `}
`;