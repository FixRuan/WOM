import * as S from "./styles";

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="logo" />
      <S.Title>react avançado</S.Title>
      <S.Description>Typescript, ReactJs, NextJs e Styled Components</S.Description>
      <S.Illustration src="/img/hero-illustration.svg" alt="illustration" />
    </S.Wrapper>
  );
}