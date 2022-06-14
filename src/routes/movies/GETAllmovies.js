import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse } from '../../utils/responseBuilder'

exports.GETAllmovies = (ctx) => {
    const allMoviesList = moviesController.getAllMovies()
    let movieslist=''
    if (ctx.query.limit) movieslist = allMoviesList.slice(0,ctx.query.limit)
    else movieslist = allMoviesList
    if (allMoviesList) ctx = getOKResponse(ctx, movieslist) 
    else ctx = getErrorResponse(ctx)
    return ctx
}