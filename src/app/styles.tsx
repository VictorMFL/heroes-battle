import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  display: grid;
  gap: 2rem;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 660px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 445px) {
    grid-template-columns: 1fr;
    padding: 0.5rem;
  }
`;
