import Modal from "@mui/material/Modal";
import * as S from "./styles";

import { useBattleContext } from "@/context/battle/useBattle";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import AlertMessage from "../alertMessage/AlertMessage";

const Battle = () => {
  const [open, setOpen] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const { battle } = useBattleContext();

  const handleOpen = () => setOpen(true); // Abre o modal
  const handleClose = () => setOpen(false); // Fecha o modal

  const battleWinner = () => {
    if (battle.length < 2) {
      setError(true);
    } else {
      const totalPower1 = Object.values(battle[0].powerstats).reduce(
        (a, b) => a + b,
        0
      );
      const totalPower2 = Object.values(battle[1].powerstats).reduce(
        (a, b) => a + b,
        0
      );

      if (totalPower1 > totalPower2) {
        setWinner(battle[0].name);
      } else if (totalPower1 < totalPower2) {
        setWinner(battle[1].name);
      } else {
        setWinner("Empate");
      }
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }, [error]);

  useEffect(() => {
    if (battle.length === 1) {
      // Reseta a mensagem do ganhador ao remover alguma das cartas
      setWinner(null);
    }
  }, [battle]);

  if (battle.length < 1) return null;
  return (
    <S.Notification>
      <S.OpenModal onClick={handleOpen}>
        <S.Icon>⚔️</S.Icon>
      </S.OpenModal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <S.Container>
          <S.CloseModal onClick={handleClose}>
            <S.Icon>❌</S.Icon>
          </S.CloseModal>
          <S.ContainerBattle>
            <Card
              img={battle[0].images.sm}
              name={battle[0].name}
              combat={battle[0].powerstats.combat}
              power={battle[0].powerstats.power}
              durability={battle[0].powerstats.durability}
              speed={battle[0].powerstats.speed}
              strength={battle[0].powerstats.strength}
              intelligence={battle[0].powerstats.intelligence}
              id={battle[0].id}
            />
            <S.VS>VS</S.VS>
            {battle.length === 1 ? (
              <p>Selecione outro Personagem</p>
            ) : (
              <Card
                img={battle[1].images.sm}
                name={battle[1].name}
                combat={battle[1].powerstats.combat}
                power={battle[1].powerstats.power}
                durability={battle[1].powerstats.durability}
                speed={battle[1].powerstats.speed}
                strength={battle[1].powerstats.strength}
                intelligence={battle[1].powerstats.intelligence}
                id={battle[1].id}
              />
            )}
          </S.ContainerBattle>

          <S.Button onClick={battleWinner}>Batalhar</S.Button>
          {winner === null || battle.length === 1 ? null : winner ===
            "Empate" ? (
            <p>O resultado é: {winner}</p>
          ) : (
            <p>O vencedor é: {winner}</p>
          )}
          {error && (
            <AlertMessage
              title="error"
              description="Selecione mais um personagem para acontecer a luta."
            />
          )}
        </S.Container>
      </Modal>
    </S.Notification>
  );
};

export default Battle;
