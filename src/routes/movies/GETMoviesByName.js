import moviesController from '../../actions/movies/movies'
import { getOKResponse ,getErrorResponse, getErrorFilterByName} from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList) ctx = getOKResponse(ctx, moviesList) 
    else ctx = getErrorFilterByName(ctx)
    return ctx
}