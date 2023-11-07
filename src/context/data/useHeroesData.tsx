import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import axios from "axios";

// Props dos dados da API
import { SuperHeroDataProps } from "@/interface/interface";

export type HeroesDataContextProps = {
  data: SuperHeroDataProps[];
};

export const HeroesDataContext = createContext({} as HeroesDataContextProps);

export const HeroesDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<SuperHeroDataProps[]>([]);

  const get = async () => {
    let apiUrl = "http://homologacao3.azapfy.com.br/api/ps/metahumans";
    try {
      const { data } = await axios.get(apiUrl);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <HeroesDataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </HeroesDataContext.Provider>
  );
};

export const useHeroesDataContext = () => useContext(HeroesDataContext);
