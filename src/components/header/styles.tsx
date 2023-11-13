import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;

  @media (max-width: 420px) {
    max-width: 90px;
  }
`;

export const Input = styled.input`
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  width: 100%;
  padding-left: 2.5rem;
  outline: none;
  background: linear-gradient(
    ${(props) =>
      `${props.theme.colors.input.gradient.start} 0%, ${props.theme.colors.input.gradient.middle} 66%, ${props.theme.colors.input.gradient.end} 100%`}
  );
  color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease;
  border: 2px solid;
  border-image: conic-gradient(
      ${(props) => props.theme.colors.input.green01},
      ${(props) => props.theme.colors.input.blue01},
      ${(props) => props.theme.colors.input.green02}
    )
    1;

  &::placeholder {
    color: ${(props) => props.theme.colors.white};
  }

  &:focus::placeholder {
    color: ${(props) => props.theme.colors.input.gray01};
  }

  @media (max-width: 420px) {
    &::placeholder {
      color: transparent;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
`;

export const Icon = styled.svg`
  position: absolute;
  left: 1rem;
  fill: ${(props) => props.theme.colors.white};
  width: 1rem;
  height: 1rem;
`;

export const SearchResult = styled.div`
  position: absolute;
  z-index: 100;
  top: 5rem;
  right: 0;
  width: 420px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.gray01};
  padding: 10px;
  border-radius: 8px;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  @media (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
