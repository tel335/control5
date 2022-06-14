import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse } from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList){
        if(moviesList.length  > 0){
            ctx = getOKResponse(ctx, moviesList);
        }else{
            ctx = getOKResponse(ctx, {status: 200, message: 'No se han encontrado coincidencias'});
        }
    }else{
        ctx = getErrorResponse(ctx);
    }
    return ctx
}