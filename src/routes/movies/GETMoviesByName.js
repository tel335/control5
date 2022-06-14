import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse, getResponse2 } from '../../utils/responseBuilder'

exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    let string = ctx.params.name
    console.log("DATOS 2")
    console.log(moviesList)
    if (moviesList){

     ctx = getResponse2(ctx, moviesList) 
}
    else ctx = getResponse2(ctx,moviesList)
    return ctx
}