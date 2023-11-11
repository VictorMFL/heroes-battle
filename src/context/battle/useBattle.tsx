import { SuperHeroDataProps } from "@/interface/interface";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useHeroesDataContext } from "../data/useHeroesData";

export type BattleContextProps = {
  battle: SuperHeroDataProps[];
  HeroPreparationForBattle: (id: number) => void;
  removeHeroOfBattle: (id: number) => void;
  error: boolean;
};

export const BattleContext = createContext({} as BattleContextProps);

export const BattleProvider = ({ children }: { children: ReactNode }) => {
  const [battle, setBattle] = useState<SuperHeroDataProps[]>([]);
  const [error, setError] = useState<boolean>(false);

  const { data } = useHeroesDataContext();

  const HeroPreparationForBattle = (id: number) => {
    const filteredHero = data.filter((hero) => hero.id === id);

    if (battle.length < 2) {
      setBattle((battle) => [...battle, ...filteredHero]);
    } else {
      setError(true);
    }
  };

  const removeHeroOfBattle = (id: number) => {
    const filteredHero = battle.filter((hero) => hero.id != id);

    setBattle(filteredHero);
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }, [error]);

  return (
    <BattleContext.Provider
      value={{ battle, HeroPreparationForBattle, removeHeroOfBattle, error }}
    >
      {children}
    </BattleContext.Provider>
  );
};

export const useBattleContext = () => useContext(BattleContext);
