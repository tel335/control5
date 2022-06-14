import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse2 } from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList) ctx = getOKResponse(ctx, moviesList) 
    else ctx = getErrorResponse2(ctx)
    return ctx
}