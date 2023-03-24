import { css } from "styled-components";
import styled from "styled-components";

export const Styleddiv = styled.div`
  ${(props) =>
    props.longValue === "red" &&
    css`
      background-color: hsla(0, 100%, 67%, 0.08);
    `}
  ${(props) =>
    props.longValue === "yellow" &&
    css`
      background-color: hsla(39, 100%, 56%, 0.08);
    `}
  ${(props) =>
    props.longValue === "green" &&
    css`
      background-color: hsla(166, 100%, 37%, 0.08);
    `}
  ${(props) =>
    props.longValue === "blue" &&
    css`
      background-color: hsla(234, 85%, 45%, 0.08);
    `}
`;
