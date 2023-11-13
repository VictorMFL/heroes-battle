import { useState, ChangeEvent, useRef, FormEvent } from "react";

import * as S from "./styles";

import { useHeroesDataContext } from "@/context/data/useHeroesData";
import Card from "../card/Card";

import { debounce } from "lodash";

const Header = () => {
  const [search, setSearch] = useState<string>("");

  const { data } = useHeroesDataContext();

  const debouncedSearch = useRef(
    debounce((query) => setSearch(query), 500)
  ).current;

  const handleSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(target.value);
  };

  const filteredData =
    data &&
    data.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.Header>
      <S.Title>Batalha de Heróis</S.Title>
      <S.Form onSubmit={submitSearch}>
        <S.Icon viewBox="0 0 24 24" aria-hidden="true" type="submit">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </S.Icon>
        <S.Input
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
        />
      </S.Form>

      {search !== "" && (
        <S.SearchResult>
          {search != "" &&
            filteredData &&
            filteredData.map((hero) => {
              return (
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
              );
            })}
        </S.SearchResult>
      )}
    </S.Header>
  );
};

export default Header;
