import React from "react";
import { GrayBtn, OrangeBtn, TopButtonBg, TopButtonImg } from "../../assets";
import * as S from "./style";

type Props = {
  onClick: () => void;
  theme: "elec" | "acou";
  activeTheme: "elec" | "acou";
};

export function RightButton({ activeTheme, onClick, theme }: Props) {
  return (
    <S.Button onClick={onClick}>
      <S.FrontImg
        src={theme === "elec" ? GrayBtn : OrangeBtn}
        isActive={activeTheme === theme}
      />
    </S.Button>
  );
}
