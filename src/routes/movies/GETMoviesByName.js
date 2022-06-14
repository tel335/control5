import moviesController from '../../actions/movies/movies'
import { getOKResponse,getErrorMoviesByName } from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList) ctx = getOKResponse(ctx, moviesList) 
    else ctx = getErrorMoviesByName(ctx)
    return ctx
}