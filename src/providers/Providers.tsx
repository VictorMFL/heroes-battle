"use client";

import { HeroesDataProvider } from "@/context/data/useHeroesData";
import { ProviderStyle } from "@/styles/Theme";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProviderStyle>
      <HeroesDataProvider>{children}</HeroesDataProvider>
    </ProviderStyle>
  );
};

export default Providers;
