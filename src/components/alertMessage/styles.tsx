import styled, { keyframes } from "styled-components";

const animeRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(150px);
  }
  10% {
    transform: translateX(0);
    opacity: 1
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 0;
  opacity: 0;
  animation: ${animeRight} 4000ms linear;
`;
