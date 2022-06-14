import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse } from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList) ctx = getOKResponse(ctx, moviesList) 
    if(moviesList.lenght == 0 ){
        ctx.body ={status:200, message:'No se han encontrado coincidencias'}
    }
    else {ctx = getErrorResponse(ctx)}
    return ctx
}