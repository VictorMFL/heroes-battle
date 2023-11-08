import { createContext, useContext, useState, ReactNode } from "react";

export type PaginationContextProps = {
  handleLoadMore: (value: number) => void;
  visibleCount: number;
  initialHero: number;
};

export const PaginationContext = createContext({} as PaginationContextProps);

export const PaginationProvider = ({ children }: { children: ReactNode }) => {
  const [visibleCount, setVisibleCount] = useState(30); // Controla a quantidade de heróis que estão sendo exibidos
  const [initialHero, setInitialHero] = useState(0); // Verifica qual vai ser o primeiro herói que vai ser mostrado

  // Muda os heróis visíveis de acordo com a página que o usuário está 
  const handleLoadMore = (value: number) => {
    if (value >= 1 && value <= 30) {
      setVisibleCount(value * 30);
      setInitialHero((value - 1) * 30);
    } else {
      setVisibleCount(30);
      setInitialHero(0);
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        handleLoadMore,
        visibleCount,
        initialHero,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export const usePaginationContext = () => useContext(PaginationContext);
