import { css } from "styled-components";
import styled from "styled-components";

export const Name = styled.h1`
  ${(props) =>
    props.TColor === "red" &&
    css`
      color: #ff5757;
    `}
  ${(props) =>
    props.TColor === "yellow" &&
    css`
      color: #ffb01f;
    `}
        ${(props) =>
    props.TColor === "green" &&
    css`
      color: #00bd91;
    `}
            ${(props) =>
    props.TColor === "blue" &&
    css`
      color: #1125d4;
    `}
`;
