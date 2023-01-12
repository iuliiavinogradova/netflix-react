const key = '';

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    requstUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US&page=1`,
};

export default requests;
