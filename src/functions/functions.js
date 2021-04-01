export async function fetchSearchResults(query) {
  const url = 'https://www.omdbapi.com/?apikey=2d031a4a&s=';
  const response = await fetch(url + query);
  const data = await response.json();
  //console.log('data', data);
  return data.Search;
}

export async function fetchFromID(id) {
  const url = 'https://www.omdbapi.com/?apikey=2d031a4a&i=';
  const response = await fetch(url + id);
  const data = await response.json();
  return data;
}
