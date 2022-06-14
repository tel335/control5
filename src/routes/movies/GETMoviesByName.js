import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse } from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList.length == 0){
        ctx.body = { status: 200, message: 'No se han encontrado coincidencias' }
        ctx.status = 200
    }
    else if (moviesList){
        ctx = getOKResponse(ctx, moviesList)
    }
    else{
        ctx = getErrorResponse(ctx)
    }
    return ctx
}