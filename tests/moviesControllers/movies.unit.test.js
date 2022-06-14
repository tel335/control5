import movies from '../../src/actions/movies/movies';
const list = require('../../src/dataset/movies.json');

describe("Tests unitarios", () => {
    test("Deberia retornar todas las peliculas", () => {
        const response = movies.getAllMovies();
        expect(response).toEqual(list);
    });

    test("Deberia retornar un array vacio", () => {
        const response = movies.getMoviesByName("aidnacincdiouanoipc");
        expect(response).toEqual([]);
    });

    test("Deberia retornar los datos de Little Women", () => {
        const response = movies.getMoviesByName("Little Women");
        expect(response[0]).toEqual({"Title": "Little Women", "US Gross": 50003303, "Worldwide Gross": 50003303, "US DVD Sales": null, "Production Budget": 15000000, "Release Date": "Dec 21 1994", "MPAA Rating": "PG", "Running Time min": null, "Distributor": "Sony Pictures", "Source": "Based on Book/Short Story", "Major Genre": "Drama", "Creative Type": "Historical Fiction", "Director": null, "Rotten Tomatoes Rating": 89, "IMDB Rating": 7.1, "IMDB Votes": 16514});
    })

    test("Deberia retornar las peliculas ordenadas en orden decendiente segun imdb", () => {
        const response = movies.getMoviesByClassifier('imdb', 'desc');
        expect(response).toEqual(list);
        expect(response[0]).toEqual({
            "Title": "The Godfather",
            "US Gross": 134966411,
            "Worldwide Gross": 268500000,
            "US DVD Sales": null,
            "Production Budget": 7000000,
            "Release Date": "Mar 15 1972",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": "Paramount Pictures",
            "Source": null,
            "Major Genre": null,
            "Creative Type": "Historical Fiction",
            "Director": "Francis Ford Coppola",
            "Rotten Tomatoes Rating": 100,
            "IMDB Rating": 9.2,
            "IMDB Votes": 411088
        });
    });

    test("Deberia retornar las peliculas en orden ascendiente segun rotten tomatoes", () => {
        const response = movies.getMoviesByClassifier('rotten', 'asc');
        expect(response).toEqual(list);
    });
});