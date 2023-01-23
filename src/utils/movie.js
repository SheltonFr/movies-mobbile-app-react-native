// gerar uma lista de filmes com tamanho flexDirection:
export function getListMovies(size, movies) {
  let moviesList = [];
  for (let i = 0; i < size; i++) {
    moviesList.push(movies[i]);
  }

  return moviesList;
}

// generate random number based on movie amount
export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}
