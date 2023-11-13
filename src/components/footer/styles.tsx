import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.gray02};

  @media (max-width: 410px) {
    padding: 1.5rem 0;
    font-size: 0.5rem;
  }
`;
