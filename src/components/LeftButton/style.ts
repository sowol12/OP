import { styled } from "styled-components";

export const Button = styled.div`
  cursor: pointer;
  position: relative;
`;

export const FrontImg = styled.img<{ isActive: boolean }>`
  position: absolute;

  left: ${({ isActive }) => (isActive ? "0" : "-20px")};
  transition: 0.3s;
`;
