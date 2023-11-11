import styled, { keyframes } from "styled-components";

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
`;

export const OpenModal = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8e8e8;
  background-color: #212121;
  width: 70px;
  height: 70px;
  font-size: 24px;
  text-transform: uppercase;
  border: 2px solid #212121;
  border-radius: 50%;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.15), 2px 2px 2px rgba(0, 0, 0, 0.1),
    -3px -3px 2px rgba(255, 255, 255, 0.05),
    -2px -2px 1px rgba(255, 255, 255, 0.05);
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
    background-color: #e8e8e8;
    width: 150%;
    height: 150%;
    left: 0%;
    bottom: 0%;
    transform: translate(-100%, 100%) rotate(45deg);
    border-radius: 15px;
  }
`;

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
`;

export const ContainerBattle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const VS = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Button = styled.button`
  color: #ecf0f1;
  font-size: 17px;
  background-color: #e67e22;
  border: 1px solid #f39c12;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 6px 0px #d35400;
  transition: all 0.1s;
  cursor: pointer;

  &:active {
    box-shadow: 0px 2px 0px #d35400;
    position: relative;
    top: 2px;
  }
`;
