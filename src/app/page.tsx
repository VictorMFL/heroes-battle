"use client";

import * as S from "./styles";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import { useHeroesDataContext } from "@/context/data/useHeroesData";
import { usePaginationContext } from "@/context/pagination/usePagination";

export default function Home() {
  const { data } = useHeroesDataContext();

  const { visibleCount, initialHero } = usePaginationContext(); // Controla os heróis que vão ser mostrados
  return (
    <>
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
          />
        ))}
      </S.Container>
      
      <Footer />
    </>
  );
}
