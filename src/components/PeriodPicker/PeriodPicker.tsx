import React from "react";
import {
  AcouPreiod,
  AcouPreiodPicker,
  ElecPreiod,
  ElecPreiodPicker,
} from "../../assets";
import * as S from "./style";

type Props = {
  theme: "elec" | "acou";
  top: string;
};

export function PeriodPicker({ theme, top }: Props) {
  return (
    <div
      style={{
        width: 45,
      }}
    >
      <S.Period src={theme === "elec" ? ElecPreiod : AcouPreiod} />
      <S.Picker
        src={theme === "elec" ? ElecPreiodPicker : AcouPreiodPicker}
        top={top}
      />
    </div>
  );
}
