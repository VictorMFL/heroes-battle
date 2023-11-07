import * as S from "./styles";

interface HeroProps {
  img: string;
  name: string;
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
}

const Card = ({
  img,
  name,
  combat,
  durability,
  intelligence,
  power,
  speed,
  strength,
}: HeroProps) => {
  return (
    <S.Card>
      <S.Content>
        <S.Back>
          <S.BackContent>
            <S.Image src={img} alt={`Imagem do(a) ${name}`} />
            <S.ContainerName>
              <strong>{name}</strong>
            </S.ContainerName>
          </S.BackContent>
        </S.Back>
        <S.Front>
          <S.Contrast>
            <S.Circle></S.Circle>
            <S.CircleRight></S.CircleRight>
            <S.CircleBottom></S.CircleBottom>
          </S.Contrast>

          <S.FrontContent>
            <S.Badge>Detalhes</S.Badge>

            <S.Description>
              <S.ContainerTitle>
                <S.Title>Combate:</S.Title>
                <p>{combat}</p>
              </S.ContainerTitle>

              <S.ContainerTitle>
                <S.Title>Durabilidade:</S.Title>
                <p>{durability}</p>
              </S.ContainerTitle>

              <S.ContainerTitle>
                <S.Title>Inteligência:</S.Title>
                <p>{intelligence}</p>
              </S.ContainerTitle>

              <S.ContainerTitle>
                <S.Title>Poder:</S.Title>
                <p>{power}</p>
              </S.ContainerTitle>

              <S.ContainerTitle>
                <S.Title>Velocidade:</S.Title>
                <p>{speed}</p>
              </S.ContainerTitle>

              <S.ContainerTitle>
                <S.Title>Força:</S.Title>
                <p>{strength}</p>
              </S.ContainerTitle>
            </S.Description>

            <S.Description>
              <S.ContainerTitle>
                <S.Title>
                  <strong>Prepará-lo(a) para a batalha?</strong>
                </S.Title>
              </S.ContainerTitle>
              <S.CardFooter>
                <S.Yes>Sim </S.Yes> | <S.No> Não</S.No>
              </S.CardFooter>
            </S.Description>
          </S.FrontContent>
        </S.Front>
      </S.Content>
    </S.Card>
  );
};

export default Card;
