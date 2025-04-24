export const getPokemon = async () => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=400";
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    
    const pokemonDetails = await Promise.all(
      data.results.map(async (curApi) => {
        const res = await fetch(curApi.url);
        const data = await res.json();
        return data;
      })
    );
  return pokemonDetails;
  } catch (error) {
    console.log(error);
  }
};
