import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
`;

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
`;

export const Card = styled.div`
  overflow: visible;
  width: 190px;
  height: 254px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 300ms;
  box-shadow: 0px 0px 10px 1px ${(props) => props.theme.colors.black01};
  border-radius: 5px;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

const FrontAndBack = styled.div`
  background-color: ${(props) => props.theme.colors.gray01};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  overflow: hidden;
`;

export const Back = styled(FrontAndBack)`
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    content: " ";
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.colors.orange01},
      ${(props) => props.theme.colors.orange01},
      ${(props) => props.theme.colors.orange01},
      ${(props) => props.theme.colors.orange01},
      transparent
    );
    animation: ${rotation} 5000ms infinite linear;
  }
`;

export const BackContent = styled.div`
  position: absolute;
  width: 99%;
  height: 99%;
  background-color: ${(props) => props.theme.colors.gray01};
  border-radius: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerName = styled.div`
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  padding-bottom: 5px;
`;

export const Image = styled.img`
  width: 99%;
  height: 70%;
  border-radius: 5px;
`;

export const Front = styled(FrontAndBack)`
  transform: rotateY(180deg);
  color: ${(props) => props.theme.colors.white};
`;

export const FrontContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Badge = styled.small`
  background-color: ${(props) => props.theme.colors.black02};
  padding: 2px 10px;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  width: fit-content;
`;

export const Description = styled.div`
  box-shadow: 0px 0px 10px 5px ${(props) => props.theme.colors.black03};
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.black04};
  backdrop-filter: blur(5px);
  border-radius: 5px;
`;

export const ContainerTitle = styled.div`
  font-size: 11px;
  max-width: 100%;
  display: flex;
`;

export const Title = styled.p`
  width: 100%;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.white01};
  margin-top: 5px;
  padding: 0 1rem;
  font-size: 10px;
`;

const YesAndNo = styled.p`
font-weight: 800;
cursor: pointer;
`

export const Yes = styled(YesAndNo)`
color: ${(props) => props.theme.colors.green01};
`;

export const No = styled(YesAndNo)`
  color: ${(props) => props.theme.colors.red01};
`;

export const Contrast = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Circle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.orange02};
  position: relative;
  filter: blur(15px);
  animation: ${floating} 2600ms infinite linear;
`;

export const CircleRight = styled(Circle)`
  background-color: ${(props) => props.theme.colors.red01};
  left: 160px;
  top: -80px;
  width: 30px;
  height: 30px;
  animation-delay: -1800ms;
`;

export const CircleBottom = styled(Circle)`
  background-color: ${(props) => props.theme.colors.orange03};
  left: 50px;
  top: 0px;
  width: 150px;
  height: 150px;
  animation-delay: -800ms;
`;
