import Router from 'koa-router'
import getHealth from './health/health'
import { GETAllmovies } from './movies/GETAllmovies'
import { GETMoviesByName } from './movies/GETMoviesByName'
import { GETMoviesByClassifier } from './movies/GETMoviesByClassifier'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/movies', GETAllmovies)
router.get('/api/movies/:name', GETMoviesByName)
router.get('/api/movies/rating/:classifier/:order', GETMoviesByClassifier)

export default router
