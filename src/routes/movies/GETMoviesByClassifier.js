import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse } from '../../utils/responseBuilder'

exports.GETMoviesByClassifier = (ctx) => {
    const moviesList = moviesController.getMoviesByClassifier(ctx.params.classifier, ctx.params.order)
    /* if (moviesList) ctx = getOKResponse(ctx, moviesList) 
    else ctx = getErrorResponse(ctx) */
    /* if (moviesList){
        ctx = getOKResponse(ctx, moviesList)
    } */
    if (moviesList){
        ctx.body =  {
            status: 200, 
            message : moviesList}
    }
    else{
        ctx.body={
            status: 500,
            message: 'ERROR'
        }
    }
    
    return ctx
}