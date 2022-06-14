import moviesController from '../../../src/actions/movies/movies'
import moviesData from '../../../src/dataset/movies.json'
import moviesActions from '../../../src/actions/movies/movies'

test('Retornar todas las peliculas', () => {
    const result = moviesController.getAllMovies()
    expect(result).toBe(moviesData)
})

test('Retornar todas las peliculas por filtro', () => {
    const result = moviesController.getMoviesByName('avatar')
    const largo = result.length
    expect(largo).toBe(1)
})


test('Retornar todas las peliculas por rating y orden', () => {
    const result = moviesController.getMoviesByClassifier('imdb','desc')
    
    expect(result).toBe(moviesActions.getMoviesByClassifier('imdb','desc'))
})

test('test de getclassifierParam', () => {
    const result = moviesController.getClassifierParam('imdb')
    
    expect(result).toBe(undefined)
})

test('test de getOrderParam', () => {
    const result = moviesController.getOrderParam('desc')
    
    expect(result).toBe(undefined)
})


