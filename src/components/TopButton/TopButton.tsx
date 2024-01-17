import React from "react";
import { AcouTopBg, TopButtonBg, TopButtonImg } from "../../assets";
import * as S from "./style";

type Props = {
  onClick: () => void;
  src: string;
  theme: "elec" | "acou";
  disabled?: boolean;
};

export function TopButton({ onClick, src, theme, disabled }: Props) {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      <S.BgImg src={theme === "elec" ? TopButtonBg : AcouTopBg} />
      <S.FrontImg src={src} disabled={disabled} />
    </S.Button>
  );
}
