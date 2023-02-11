import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getMovieList = async () => {
    const movie = await axios.get(
        `${baseURL}/movie/popular?page=1&api_key=${apiKey}`
    )
    // console.log({movieList: movie})
    return movie.data.results
}
export const searchMovie = async (q) => {
    const search = await axios.get(
        `${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`
    )
    return search.data
}