"use client";

import { BattleProvider } from "@/context/battle/useBattle";
import { HeroesDataProvider } from "@/context/data/useHeroesData";
import { PaginationProvider } from "@/context/pagination/usePagination";
import { ProviderStyle } from "@/styles/Theme";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProviderStyle>
      <HeroesDataProvider>
        <PaginationProvider>
          <BattleProvider>{children}</BattleProvider>
        </PaginationProvider>
      </HeroesDataProvider>
    </ProviderStyle>
  );
};

export default Providers;
