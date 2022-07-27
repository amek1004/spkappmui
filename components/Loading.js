import React from "react";
import { Background, LoadingText } from "../styles/style";

export default function Loading() {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src="/img/Magnify.gif" alt="로딩중" width="5%" />
    </Background>
  );
}
