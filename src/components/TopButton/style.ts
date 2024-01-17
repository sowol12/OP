import { styled } from "styled-components";

export const Button = styled.div<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "unset" : "pointer")};
  position: relative;
  display: flex;
  width: 85px;
`;

export const FrontImg = styled.img<{ disabled?: boolean }>`
  position: absolute;
  transition: 0.3s;
  top: ${({ disabled }) => (disabled ? 0 : -15)}px;
  width: 85px;
  height: 70px;
  &:hover {
    transition: 0.3s;
    top: 0;
  }
`;

export const BgImg = styled.img`
  position: absolute;
  width: 85px;
  height: 70px;
`;
