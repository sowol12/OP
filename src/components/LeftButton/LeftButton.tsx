import React from "react";
import {
  GrayBtn,
  LeftBtn,
  OrangeBtn,
  TopButtonBg,
  TopButtonImg,
} from "../../assets";
import * as S from "./style";

type Props = {
  onClick: () => void;
  isActive: boolean;
};

export function LeftButton({ onClick, isActive }: Props) {
  return (
    <S.Button onClick={onClick}>
      <S.FrontImg src={LeftBtn} isActive={isActive} />
    </S.Button>
  );
}
