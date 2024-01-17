import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  z-index: 4;
`;

export const ModalContainer = styled.div`
  background-color: #57262f;
  width: 65vw;
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
  padding: 100px;
`;

export const Title = styled.span`
  font-size: 60px;
  color: #d9ae7b;
  font-weight: bold;
`;

export const ContentArea = styled.div`
  margin-top: 50px;
  color: #d9ae7b;
  font-size: 32px;
`;

export const Btn = styled.div`
  cursor: pointer;
  background-color: #d9ae7b;
  font-size: 40px;
  font-weight: bold;
  color: #57262f;
  position: absolute;
  right: 100px;
  bottom: 100px;
  padding: 15px 50px;
  border-radius: 45px;
`;
