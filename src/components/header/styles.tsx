import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};
`;

export const Form = styled.form`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
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
`;
