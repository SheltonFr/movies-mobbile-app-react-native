import axios from "axios";
import { API_KEY } from "@env";

// urm filmes em cartaz
// /movie/now_playing

// url filmes populares
// /movie/popular

// url filmes mais votados
// /movie/top_rated

export const key = API_KEY;
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  
});

export default api;
