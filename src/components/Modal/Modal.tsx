import React from "react";
import * as S from "./style";

type Props = {
  onCancel: () => void;
};

export function Modal({ onCancel }: Props) {
  return (
    <>
      <S.Overlay onClick={onCancel} />
      <S.ModalContainer>
        <S.Title>This webpage is about..</S.Title>
        <S.ContentArea>
          <div>
            <span>
              As you can see, it is inspired by cassette tape for the
              appearance,
            </span>
            <br />
            <span>but the contents are more like a sound-based archive.</span>
            <br />
            <span>
              I recorded my guitar plays on this webpage, with some
              descriptions.
            </span>
            <br />
            <span>
              The target group was initially set as myself, but I decided to
              broaden the area to
            </span>
            <br />
            <span>
              my friends, parents, and you! who are watching this message.
            </span>
            <br />
            <span>but basically who is interested in my guitar 🙂</span>
            <br />
            <br />
            <span>all copyright reserved by Sowol</span>
            <br />
            <span>Special thanks to my parents & my friends 🙂</span>
            <br />
            <span>And, THUAS</span>
          </div>
          <S.Btn onClick={onCancel}>AHA! , I get it :)</S.Btn>
        </S.ContentArea>
      </S.ModalContainer>
    </>
  );
}
