import moviesActions from '../../src/actions/movies/movies'
import moviesData from '../../src/dataset/movies.json'


describe('Test movies actions', () => {
    /* Testear obtener todas las peliculas */
    test('should show all movies', async () => {
        const movies = moviesActions.getAllMovies()
        
        expect(movies.length).toBe(moviesData.length)
        expect(movies).toEqual(moviesData)
    })

    /* Testear obtener todas las peliculas por nombre */
    test('should show movies by name', async () => {
        const movies = moviesActions.getMoviesByName("The Land Girls")
        
        expect(movies).toEqual(getMockName())
    })


    /* Testear obtener todas las peliculas por clasificacion */
    test('should show movies by clasification', async () => {
        const movies = moviesActions.getMoviesByClassifier('imdb','asc')
        
        expect(movies).toEqual(getMockClass())
    })
})


function getMockMovies() {
    return [
        {"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071},
        {"Title": "First Love, Last Rites", "US Gross": 10876, "Worldwide Gross": 10876, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Aug 07 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Strand", "Source": null, "Major Genre": "Drama", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.9, "IMDB Votes": 207},
        {"Title": "I Married a Strange Person", "US Gross": 203134, "Worldwide Gross": 203134, "US DVD Sales": null, "Production Budget": 250000, "Release Date": "Aug 28 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Lionsgate", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.8, "IMDB Votes": 865},
        {"Title": "Let's Talk About Sex", "US Gross": 373615, "Worldwide Gross": 373615, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Sep 11 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Fine Line", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 13, "IMDB Rating": null, "IMDB Votes": null},
    ]    
}

function getMockName(){
    return [
        {"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071}
    ]
}

function getMockClass(){
    return moviesActions.getMoviesByClassifier('imdb','asc')
}