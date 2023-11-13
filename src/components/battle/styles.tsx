import styled, { keyframes } from "styled-components";
import { Card } from "../card/styles";

const shakeBack = keyframes`
  0% {
    transform: translate(-100%, 100%) rotate(45deg);
  }

  50% {
    transform: translate(15%, -15%) rotate(45deg);
  }

  100% {
    transform: translate(-10%, 10%) rotate(45deg);
  }
`;

export const Notification = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  @media (max-width: 700px) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

export const OpenModal = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8e8e8;
  background-color: ${(props) => props.theme.colors.background};
  width: 70px;
  height: 70px;
  font-size: 24px;
  text-transform: uppercase;
  border: 2px solid ${(props) => props.theme.colors.background};
  border-radius: 50%;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 5px 5px 2px ${(props) => props.theme.colors.black01},
    2px 2px 2px ${(props) => props.theme.colors.black02},
    -3px -3px 2px ${(props) => props.theme.colors.blsck03},
    -2px -2px 1px ${(props) => props.theme.colors.blsck03};
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }

  &:active {
    scale: 0.95;
  }

  &:hover::before {
    animation: ${shakeBack} 0.6s forwards 0.6s;
  }

  &::before {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.colors.white02};
    width: 150%;
    height: 150%;
    left: 0%;
    bottom: 0%;
    transform: translate(-100%, 100%) rotate(45deg);
    border-radius: 15px;
  }

  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
`;

export const CloseModal = styled(OpenModal)`
  position: fixed;
  right: 3rem;
  bottom: 3rem;

  @media (max-width: 700px) {
    bottom: 1.5rem;
    right: 1.5rem;
  }
`

export const Icon = styled.span`
  position: relative;
  z-index: 2;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  ${OpenModal}:hover & {
    scale: 1.2;
  }
`;

export const Container = styled.div`
  min-width: 50%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.gray02};
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 970px) {
    width: 100%;  

    /* Diminui a largura do card */
    ${Card} {
      width: 140px;
    }
  }
`;

export const ContainerBattle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(max-width: 500px) {
    
  }
`;

export const VS = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.buttonOfBattle.white01};
  font-size: 17px;
  background-color: ${(props) => props.theme.colors.buttonOfBattle.orange01};
  border: 1px solid ${(props) => props.theme.colors.buttonOfBattle.orange02};
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 6px 0px
    ${(props) => props.theme.colors.buttonOfBattle.orange03};
  transition: all 0.1s;
  cursor: pointer;

  &:active {
    box-shadow: 0px 2px 0px
      ${(props) => props.theme.colors.buttonOfBattle.orange03};
    position: relative;
    top: 2px;
  }
`;
