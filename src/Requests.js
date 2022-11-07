const key = 'b22cf3b593e5ccefecdf63585e9d09ae'

const requests = {
    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    requestUpcomming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
};

export default requests;