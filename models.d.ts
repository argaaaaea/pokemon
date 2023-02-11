declare type Pokemon = {
  id: number;
  name: string;
  url: string;
  urlPhoto: string;
};

declare type DetailPokemon = {
  types: Array<{ type: { name: string } }>;
  weight: number;
  height: number;
  forms: {
    name: string;
  };
  abilities: Array<{ ability: { name: string } }>;
  moves: Array<{ move: { name: string } }>;
  stats: Array<{
    base_stat: number;
    effort: number;
    stat: { name: string };
  }>;
};
