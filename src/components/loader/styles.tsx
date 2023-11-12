import styled, { keyframes } from "styled-components";

const loader = keyframes`
  0% {
   transform: scale(1);
   opacity: 0;
  }
 
  50% {
   opacity: 1;
  }
 
  100% {
   transform: scale(0);
   opacity: 0;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  border: 0 solid transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;

  &::before,
  &::after {
    content: "";
    border: 7px solid ${(props) => props.theme.colors.loader};
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    animation: ${loader} 2s linear infinite;
    opacity: 0;
  }

  &::before {
    animation-delay: 1s;
  }
`;
