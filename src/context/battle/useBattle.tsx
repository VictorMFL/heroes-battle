import { SuperHeroDataProps } from "@/interface/interface";
import { createContext, useContext, useState, ReactNode } from "react";
import { useHeroesDataContext } from "../data/useHeroesData";

export type BattleContextProps = {
  battle: SuperHeroDataProps[];
  HeroPreparationForBattle: (id: number) => void;
  removeHeroOfBattle: (id: number) => void;
};

export const BattleContext = createContext({} as BattleContextProps);

export const BattleProvider = ({ children }: { children: ReactNode }) => {
  const [battle, setBattle] = useState<SuperHeroDataProps[]>([]);

  const { data } = useHeroesDataContext();

  const HeroPreparationForBattle = (id: number) => {
    const filteredHero = data.filter((hero) => hero.id === id);

    if (battle.length < 2) {
      setBattle((battle) => [...battle, ...filteredHero]);
    } else {
      alert("Você só pode ter 2 heróis na batalha de cada vez.");
    }
  };

  const removeHeroOfBattle = (id: number) => {
    const filteredHero = battle.filter((hero) => hero.id != id);

    setBattle(filteredHero);
  };

  return (
    <BattleContext.Provider
      value={{ battle, HeroPreparationForBattle, removeHeroOfBattle }}
    >
      {children}
    </BattleContext.Provider>
  );
};

export const useBattleContext = () => useContext(BattleContext);
