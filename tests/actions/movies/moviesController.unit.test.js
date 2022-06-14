import moviesActions from '../../../src/actions/movies/movies'

/**
 * El objetivo del test unitario es probar el comportamiento específico
 * de cada función en actionsMovies
 */

describe('Test movies actions', () => {
    beforeEach(() => {
        // Para que cada prueba quede limpia, borrar las movies
        moviesActions.clearMovies()
    })

    /**
     * Agregamos una nueva pelicula
     */
    test('should add new movie', async () => {
        moviesActions.addMovie(getMockMovie1())
        const movies = moviesActions.getMovies()
        
        expect(movies.length).toBe(1)
        expect(movies[0]).toEqual(getMockMovie1())
    })

    /**
     * Agregamos dos nuevas peliculas
     */
    test('should add correctly 2 new movies', async () => {
        moviesActions.addMovie(getMockMovie1())
        moviesActions.addMovie(getMockMovie2())

        const movies = moviesActions.getMovies()
        
        expect(movies.length).toBe(2)
        expect(movies[0]).toEqual(getMockMovie1())
        expect(movies[1]).toEqual(getMockMovie2())
    })

    /**
     * Borramos dos peliculas
     */
    test('should remove correctly 2 movies', async () => {
        moviesActions.addMovie(getMockMovie1())
        moviesActions.addMovie(getMockMovie2())
        moviesActions.addMovie(getMockMovie3())

        moviesActions.removeMovie('3333-3')
        moviesActions.removeMovie('2222-2')

        const movies = moviesActions.getMovies()
        
        expect(movies.length).toBe(1)
        expect(movies[0]).toEqual(getMockMovie3())
    })
})

function getMockMovie1 () {
    return {
        name: 'Braveheart',
    }
}

function getMockMovie2 () {
    return {
        name: 'Titanic',
    }
}

function getMockMovie3 () {
    return {
        name: 'Coco',
    }
}
