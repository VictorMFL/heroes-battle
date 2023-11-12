"use client";

import * as S from "./styles";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Battle from "@/components/battle/Battle";
import { useHeroesDataContext } from "@/context/data/useHeroesData";
import { usePaginationContext } from "@/context/pagination/usePagination";
import { useBattleContext } from "@/context/battle/useBattle";
import AlertMessage from "@/components/alertMessage/AlertMessage";
import Loader from "@/components/loader/Loader";

export default function Home() {
  const { data } = useHeroesDataContext(); // Dados da API

  const { visibleCount, initialHero } = usePaginationContext(); // Controla os heróis que vão ser mostrados

  const { error } = useBattleContext(); //Exibe uma mensagem de erro caso já tenha 2 personagens preparados para lutar

  if (data.length === 0) return <Loader />;
  return (
    <>
      <Header />
      <S.Container>
        {data.slice(initialHero, visibleCount).map((hero) => (
          <Card
            key={hero.id}
            img={hero.images.sm}
            name={hero.name}
            combat={hero.powerstats.combat}
            power={hero.powerstats.power}
            durability={hero.powerstats.durability}
            speed={hero.powerstats.speed}
            strength={hero.powerstats.strength}
            intelligence={hero.powerstats.intelligence}
            id={hero.id}
          />
        ))}
      </S.Container>
      
      <Battle />
      <Footer />

      {error && (
        <AlertMessage
          title="warning"
          description="Você já tem 2 personagem prontos para a luta."
        />
      )}
    </>
  );
}
