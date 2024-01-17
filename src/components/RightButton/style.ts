import { styled } from "styled-components";

export const Button = styled.div`
  cursor: pointer;
  position: relative;
  /* overflow: hidden; */
`;

export const FrontImg = styled.img<{ isActive: boolean }>`
  position: absolute;
  right: auto;
  left: ${({ isActive }) => (isActive ? "-20px" : "0")};
  transition: 0.3s;
  width: 67px;
  height: 131px;
`;
