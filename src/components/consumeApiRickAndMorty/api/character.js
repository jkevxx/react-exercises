export async function getCharacters() {
  const URL = `https://rickandmortyapi.com/api/character/`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getCharacterById(id) {
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
