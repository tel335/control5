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

    test("Deberia retornar los datos del padrino", () => {
        const response = movies.getMoviesByName("The Godfather");
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
});