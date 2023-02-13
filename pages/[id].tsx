import { Box, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { DetailTable, LoadingModal } from "../components";
import { getPokemon } from "../utils";

export default function DetailPage() {
  const router = useRouter();
  const { id, data } = router.query;
  const bg = useColorModeValue("#FFCC00", "#0075BE");
  let pokemon;
  if (typeof data === "string") {
    pokemon = JSON.parse(data) as Pokemon;
    console.log(pokemon);
  }
  const {
    isLoading,
    isError,
    data: detailPokemon,
  } = useQuery(["pokemon", `${id}`], () => getPokemon(Number(id)));

  console.log(detailPokemon);

  if (isLoading) return <LoadingModal show={isLoading}></LoadingModal>;

  if (isError) return "There is an error occured";

  if (detailPokemon && pokemon)
    return (
      <Box backgroundColor={bg}>
        <DetailTable
          detailPokemon={detailPokemon}
          pokemon={pokemon}
        ></DetailTable>
      </Box>
    );
}
