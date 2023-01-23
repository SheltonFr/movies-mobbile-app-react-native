import axios from "axios";

// urm filmes em cartaz
// /movie/now_playing

// url filmes populares
// /movie/popular

// url filmes mais votados
// /movie/top_rated

export const key = '3a9a44f6749daeba441b49cb90935aff'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;