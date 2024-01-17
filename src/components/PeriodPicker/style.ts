import styled from "styled-components";

export const Period = styled.img`
  width: 100%;
`;

export const Picker = styled.img<{ top: string }>`
  width: 30px;
  position: absolute;
  top: ${({ top }) => top};
`;
