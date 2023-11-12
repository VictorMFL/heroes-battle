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
  errorRequest: string | null;
  loading: boolean;
};

export const HeroesDataContext = createContext({} as HeroesDataContextProps);

export const HeroesDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<SuperHeroDataProps[]>([]);
  const [errorRequest, setErrorRequest] = useState<null | string>(null);
  const [loading, setLoaging] = useState(true);

  const get = async () => {
    let apiUrl = "http://homologacao3.azapfy.com.br/api/ps/metahumans";
    try {
      const { data } = await axios.get(apiUrl);
      setData(data);
    } catch (error: any) {
      console.log(error);
      setErrorRequest(error.message);
    } finally {
      setLoaging(false);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <HeroesDataContext.Provider
      value={{
        data,
        errorRequest,
        loading,
      }}
    >
      {children}
    </HeroesDataContext.Provider>
  );
};

export const useHeroesDataContext = () => useContext(HeroesDataContext);
