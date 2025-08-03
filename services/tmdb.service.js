import TmdbRepo from "../repositories/tmdb.repo.js";

function getTitles (data){
    const titles = [];

    for(let i = 0; i < data?.results?.length; i++){
        const currElement = data?.results?.at(i);
        if(!currElement){
            continue;
        }
        
        if(!currElement?.title){
            if(
                !currElement?.original_title
            ){
                continue;    
            }
            titles.push(currElement?.original_title);    
            continue;
        }

        titles.push(currElement?.title);
    }
    return titles;
}

const TmdbService = {


    async playing(language = 'en-Us', page = 1){
        try{
            const {data} = await TmdbRepo.playing(language, page);

            if(data?.results?.length <= 0){
                return {
                    data: [],
                    status: 'fullfilled',
                    inError: false,
                    error: null,
                }    
            }
            
            return {
                data: getTitles(data),
                status: 'fullfilled',
                inError: false,
                error: null
            };

        }catch(e){
            return {
                data: [],
                status: 'rejected',
                inError: true,
                error: e
            }
        }
    },
    
    async popular(language = 'en-Us', page = 1){
        try{
            const { data } = await TmdbRepo.popular(language, page);
            
            if(data?.results?.length <= 0){
                return {
                    data: [],
                    status: 'fullfilled',
                    inError: false,
                    error: null
                }    
            }
            
            return {
                data: getTitles(data),
                status: 'fullfilled',
                inError: false,
                error: null
            };

        }catch(e){
            return {
                data: [],
                status: 'rejected',
                inError: true,
                error: e
            }
        }
    },
    
    async top(language = 'en-Us', page = 1){
        try{
            const { data } = await TmdbRepo.top(language, page);
            
            if(data?.results?.length <= 0){
                return {
                    data: [],
                    status: 'fullfilled',
                    inError: false,
                    error: null
                }    
            }

            return {
                data: getTitles(data),
                status: 'fullfilled',
                inError: false,
                error: null
            };

        }catch(e){
            return {
                data: [],
                status: 'rejected',
                inError: true,
                error: e
            }
        }
    },

    async upcoming(language = 'en-Us', page = 1){
        try{
            const { data } = await TmdbRepo.upcoming(language, page);
            
            if(data?.results?.length <= 0){
                return {
                    data: [],
                    status: 'fullfilled',
                    inError: false,
                    error: null
                }    
            }

            return {
                data: getTitles(data),
                status: 'fullfilled',
                inError: false,
                error: null
            };

        }catch(e){
            return {
                data: [],
                status: 'rejected',
                inError: true,
                error: e
            }
        }
    },
   

};
TmdbService.validCommands = Object.keys(TmdbService);
Object.freeze(TmdbService);
export default TmdbService;