import { SimpleGrid, Heading, Stack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { LoadingModal, PokemonCard } from "../components";
import { getListPokemon } from "../utils";

export default function Home() {
  const {
    isLoading,
    isError,
    data: pokemonList,
  } = useQuery("pokemon", getListPokemon);

  if (isLoading) return <LoadingModal show={isLoading}></LoadingModal>;

  if (isError) return <div>"There is an error"</div>;

  return (
    <Stack spacing={6}>
      <Heading textAlign={"center"} fontSize={"6xl"} pt={4}>
        List Of Pokemon
      </Heading>
      <SimpleGrid
        spacing={4}
        p={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {pokemonList?.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
