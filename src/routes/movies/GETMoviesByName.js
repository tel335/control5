import moviesController from '../../actions/movies/movies'
import { getOKResponse, getErrorResponse } from '../../utils/responseBuilder'


exports.GETMoviesByName = (ctx) => {
    const moviesList = moviesController.getMoviesByName(ctx.params.name)
    if (moviesList) {
        ctx = getOKResponse(ctx, moviesList)
        let x = console.log(ctx.body)
        console.log(x)
        if( x == undefined){
            console.log("Hola")
            ctx.body = {message: 'No se han encontrado coincidencias', status: 200 }
            return ctx
        }
    }
    else ctx = getErrorResponse(ctx)


    return ctx
}
