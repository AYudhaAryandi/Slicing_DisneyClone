import axios from "axios";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=156ec99593a52b1c29a9a71dbeeea527&page=2';

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='156ec99593a52b1c29a9a71dbeeea527&page=2'


const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genre="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}