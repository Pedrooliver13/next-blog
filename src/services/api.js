export async function getAllData() {
  const results = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
  );
  const resultsJson = await results.json();
  return resultsJson;
}

export async function getAllPostIds() {
  const { results } = await getAllData();

  const paths = results.map((post) => ({
    params: { id: post.name },
  }));

  return paths;
}

export async function getPokemonData(id) {
  const results = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
  const resultsJson = await results.json();
  return resultsJson;
}
