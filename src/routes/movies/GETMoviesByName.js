import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse, getMessageResponse } from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (!moviesList || moviesList.length === 0)
    ctx = getMessageResponse(ctx)
    
    else if (moviesList) ctx = getOKResponse(ctx, moviesList)
       
    return ctx
}

