import Router from 'koa-router'
import getHealth from './health/health'
import { GETAllmovies } from './movies/GETAllmovies'
import { GETMoviesByName } from './movies/GETMoviesByName'
import { GETMoviesByClassifier } from './movies/GETMoviesByClassifier'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/movies', GETAllmovies)
router.get('/api/movies/:name', GETMoviesByName)
router.get('/api/movies/rating/:classifier/:order', GETMoviesByClassifier) //classifier puede tomar imdb o rotten y ordena segun el ranking
//order es asc o desc ordena de forma ascendente o descendente rating/imdb/desc, por rating de imdb en orden descendente

export default router
