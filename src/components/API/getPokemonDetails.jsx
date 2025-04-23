export const getPokemonDetails = async ({ params }) => {
  const Id = params.pokemonID;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${Id}/`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
};
