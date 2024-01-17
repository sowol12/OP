import { styled } from "styled-components";
import { AcouBodyImg, BodyImg } from "./assets";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
`;

export const Wrap = styled.div`
  display: flex;
  max-width: 1440px;
  height: 803px;
  width: 100%;
  position: relative;
`;

export const TapeArea = styled.div<{ isElec: boolean }>`
  width: 1600px;
  max-width: 1600px;
  height: 803px;
  padding: 50px 100px;
  background-image: ${({ isElec }) => `url(${isElec ? BodyImg : AcouBodyImg})`};
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 2;
  padding-bottom: 0;
`;

export const TopButtonArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 15px;
`;

export const RightButtonArea = styled.div`
  top: 150px;
  right: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 150px;
`;

export const LeftButtonArea = styled.div`
  top: 400px;
  right: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 150px;
`;

export const GuitarArea = styled.div`
  margin-top: 150px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const GuitarImg = styled.img`
  width: 100%;
`;

export const GuitarTapeArea = styled.div<{ theme: "acou" | "elec" }>`
  position: absolute;
  width: ${({ theme }) => (theme === "acou" ? "380px" : "330px")};
  right: ${({ theme }) => (theme === "acou" ? "90px" : "60px")};
  top: ${({ theme }) => (theme === "acou" ? "75px" : "110px")};
`;

export const TapeImg = styled.img`
  width: 100%;
`;

export const SmallWheel = styled.img<{ theme: "acou" | "elec" }>`
  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  animation: rotate 3s linear infinite;
  transform-origin: 50% 50%;
  position: absolute;

  width: ${({ theme }) => (theme === "acou" ? "60px" : "60px")};
  right: ${({ theme }) => (theme === "acou" ? "292px" : "246px")};
  top: ${({ theme }) => (theme === "acou" ? "115px" : "23px")};
`;

export const BigWheel = styled.img<{ theme: "acou" | "elec" }>`
  @keyframes rotate_big {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  animation: rotate_big 5s linear infinite;
  transform-origin: 50% 50%;
  width: ${({ theme }) => (theme === "acou" ? "120px" : "70px")};
  right: ${({ theme }) => (theme === "acou" ? "48px" : "29px")};
  top: ${({ theme }) => (theme === "acou" ? "48px" : "86px")};
  position: absolute;
`;

export const TitleArea = styled.div`
  position: absolute;
  left: 100px;
  top: 180px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<{ theme: "elec" | "acou" }>`
  font-family: Roboto;
  font-size: 60px;
  font-weight: bold;
  color: ${({theme}) => (theme === "elec" ? "#827077" : "#311A08")};
`;

export const Singer = styled.span<{ theme: "elec" | "acou" }>`
  font-family: Roboto;
  font-size: 35px;
  font-weight: bold;
  color: ${({theme}) => (theme === "elec" ? "#3C3638" : "5C2D16")};
  
`;

export const DescArea = styled.div<{ theme: "elec" | "acou" }>`
  
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100px;
  top: ${({ theme }) => (theme === "elec" ? 52 : 55)}%;
  max-width: 50%;
`;

export const Desc = styled.span<{ theme: "elec" | "acou" }>`
  font-family: Roboto;
  color: ${({theme}) => (theme === "elec" ? "#827077" : "#311A08")};
  font-size: 12px;
  font-weight: bold;
  line-height: 1.7;
`;

export const PickerArea = styled.div`
  position: absolute;
  right: 20px;
`;

export const ModalBtn = styled.img<{ visible: boolean }>`
  position: absolute;
  width: 100px;
  top: ${({ visible }) => (visible ? -20 : -60)}px;
  transition: 0.5s;
  left: 22%;
  cursor: pointer;
`;
