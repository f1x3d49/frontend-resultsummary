import { css } from "styled-components";
import styled from "styled-components";

export const Name = styled.h1`
  ${(props) => {
    props.TColor === "red" &&
      css`
        color: hsl(0, 100%, 67%);
      `;
  }}
`;
