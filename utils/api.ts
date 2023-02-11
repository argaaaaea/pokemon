import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getPokemon = (id: number) =>
  api.get(`/pokemon/${id}`).then((res) => res.data as DetailPokemon);

export const getListPokemon = () =>
  api
    .get("/pokemon?limit=1279")
    .then((res) => res.data.results)
    .then(
      (res) =>
        res.map((r: any) => ({
          ...r,
          id: r.url.split("/").slice(-2, -1),
          urlPhoto: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${r.url
            .split("/")
            .slice(-2, -1)}.png`,
        })) as Pokemon[]
    );
