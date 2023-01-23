// gerar uma lista de filmes com tamanho flexDirection:
export function getListMovies(size, movies) {
  let moviesList = [];
  for (let i = 0; i < size; i++) {
    moviesList.push(movies[i]);
  }

  return moviesList;
}
