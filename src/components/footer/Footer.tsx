import { usePaginationContext } from "@/context/pagination/usePagination";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ChangeEvent, useState } from "react";

import * as S from "./styles";
import { useHeroesDataContext } from "@/context/data/useHeroesData";

const Footer = () => {
  const [page, setPage] = useState(1); // Controla a página que o usuário está

  const { data } = useHeroesDataContext();

  const { handleLoadMore } = usePaginationContext();

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    handleLoadMore(value);
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (data.length == 0) return null;
  return (
    <S.Footer>
      <Stack spacing={2}>
        <Pagination
          count={19}
          page={page}
          onChange={handleChange}
          onClick={scrollToTop}
        />
      </Stack>
    </S.Footer>
  );
};

export default Footer;
