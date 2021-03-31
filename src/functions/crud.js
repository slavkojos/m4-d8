const url = const url = "https://www.omdbapi.com/?apikey=2d031a4a&s="
export function getDataFromSearch(query) {
  const fetchData = async () => {
    const response = await fetch(url + query);
    const data = await response.json();
    updateMovieData(data);
  };
  useEffect(async () => {
    fetchData();
  }, []);
}
