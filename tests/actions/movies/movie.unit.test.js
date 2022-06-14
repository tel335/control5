import movieActions from '../../../src/actions/movies/movies'

describe('Test movies actions', () => {

  test('should show all movies', async () => {
    movieActions.getAllMovies(getMockMovies1())
    const movies = movieActions.getAllMovies()

    expect(movies.length).toBe(1)
    expect(movies[0]).toEqual(getMockMovies1())
  })
  
  test('should show movies by a specific name', async () => {
    movieActions.getAllMovies(getMockMovies2())
    let name = "The Land Girls"
    movie = movieActions.getMoviesByName(name)
    expect(movie.length).toBe(1)
    expect(movie[0]).toEqual(getMockMovies1())
  })

  test('should show movies by a specific name and classifier', async () => {
    movieActions.getAllMovies(getMockMovies2())
    let order = 'asc'
    let classifier = 'imdb'
    movies = movieActions.getMoviesByClassifier(classifier, order)

    expect(movies.length).toBe(1)
    expect(movies[0]).toEqual(getMockMovies1())

  })

})

function getMockMovies1() {
  return {
    "Title": "The Land Girls",
    "US Gross": 146083,
    "Worldwide Gross": 146083,
    "US DVD Sales": null,
    "Production Budget": 8000000,
    "Release Date": "Jun 12 1998",
    "MPAA Rating": "R",
    "Running Time min": null,
    "Distributor": "Gramercy",
    "Source": null,
    "Major Genre": null,
    "Creative Type": null,
    "Director": null,
    "Rotten Tomatoes Rating": null,
    "IMDB Rating": 6.1,
    "IMDB Votes": 1071
  }
}
function getMockMovies2() {
  return [
    { "Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071 },
    {
      "Title": "First Love, Last Rites",
      "US Gross": 10876,
      "Worldwide Gross": 10876,
      "US DVD Sales": null,
      "Production Budget": 300000,
      "Release Date": "Aug 07 1998",
      "MPAA Rating": "R",
      "Running Time min": null,
      "Distributor": "Strand",
      "Source": null,
      "Major Genre": "Drama",
      "Creative Type": null,
      "Director": null,
      "Rotten Tomatoes Rating": null,
      "IMDB Rating": 6.9,
      "IMDB Votes": 207
    }
  ]
}