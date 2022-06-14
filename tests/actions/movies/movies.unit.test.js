import movieAction from '../../../src/actions/movies/movies'

describe('Test user actions', () => {
    
    test('should show all movies', async () => {
        movieAction.getAllMovies()
        const movies = movieAction.getAllMovies()
        
        expect(movies[0]).toEqual(getMockUser1())
        expect(movies.body).toEqual(getMockUser1())
    })

    test('should show a movie by name', async () => {
        movieAction.getMoviesByName(getMockUser1("name"))
        const movies = movieAction.getAllMovies()
        
        expect(movies[0]).toEqual(getMockUser1("name"))
        expect(movies.body).toEqual(getMockUser1("name"))
    })

    test('should show a movie by classifier', async () => {
        movieAction.getMoviesByClassifier(getMockUser1("IMDB Rating"))
        const movies = movieAction.getAllMovies()
        
        expect(movies[0]).toEqual(getMockUser1("IMDB Rating"))
        expect(movies.body).toEqual(getMockUser1("IMDB Rating"))
    })
    
})

function getMockUser1 () {
    return {
        "name": "The Land Girls",
        "IMDB Rating": 6.1
    }
}
