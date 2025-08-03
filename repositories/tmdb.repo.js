import TmdbHelper from '../helpers/tmdb.helper.js';

const TmdbRepo = {
    async playing(language = 'en-Us', page = 1){
        return await TmdbHelper.get(`/3/movie/now_playing?language=${language}&page=${page}`);
    },
    
    async popular(language = 'en-Us', page = 1){
        return await TmdbHelper.get(`/3/movie/popular?language=${language}&page=${page}`);
    },
  
    async top(language = 'en-Us', page = 1){
        return await TmdbHelper.get(`/3/movie/top_rated?language=${language}&page=${page}`);
    },

    async upcoming(language = 'en-Us', page = 1){
        return await TmdbHelper.get(`/3/movie/upcoming?language=${language}&page=${page}`);
    },

};

export default TmdbRepo;