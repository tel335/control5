import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse,getErrorResponseClassifier } from '../../utils/responseBuilder'

exports.GETMoviesByClassifier = (ctx) => {
    const moviesList = moviesController.getMoviesByClassifier(ctx.params.classifier, ctx.params.order)
    if (moviesList) ctx = getOKResponse(ctx, moviesList) 
    else ctx = getErrorResponseClassifier(ctx)
    return ctx
}