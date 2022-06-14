import moviesActions from '../../../src/actions/movies/movies'
import moviesData from '../../../src/dataset/movies.json'

test('testing getAllMovis()', () => {
    expect(moviesActions.getAllMovies()).toEqual(moviesData);
  });

test('testing getMoviesByName("Slam")', () => {
  expect(moviesActions.getMoviesByName("Slam")).toEqual([{"Title": "Slam", "US Gross": 1009819, "Worldwide Gross": 1087521, "US DVD Sales": null, "Production Budget": 1000000, "Release Date": "Oct 09 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Trimark", "Source": "Original Screenplay", "Major Genre": "Drama", "Creative Type": "Contemporary Fiction", "Director": null, "Rotten Tomatoes Rating": 62, "IMDB Rating": 3.4, "IMDB Votes": 165}]);

});
test('testing getMoviesByName("adfsadfsa")', () => {
    expect(moviesActions.getMoviesByName("adfsadfsa")).toEqual([]);
  
});

test('testing getMoviesByClassifier("fd","asc")', () => {
    expect(moviesActions.getMoviesByClassifier("fd","asc")).toEqual(undefined);
  
});
test('testing getMoviesByClassifier("fd","desc")', () => {
    expect(moviesActions.getMoviesByClassifier("fd","desc")).toEqual(undefined);
  
});

test('testing getMoviesByClassifier("imdb","sadas")', () => {
    expect(moviesActions.getMoviesByClassifier("imdb","sadas")).toEqual(undefined);
  
});
test('testing getMoviesByClassifier("rotten","sadas")', () => {
    expect(moviesActions.getMoviesByClassifier("rotten","sadas")).toEqual(undefined);
  
});
