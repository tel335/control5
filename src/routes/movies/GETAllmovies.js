import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse } from '../../utils/responseBuilder'

exports.GETAllmovies = (ctx) => {
    const allMoviesList = moviesController.getAllMovies()

    if (allMoviesList) ctx = getOKResponse(ctx, allMoviesList) 
    else ctx = getErrorResponse(ctx)
    return ctx
}