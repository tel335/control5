import request from 'supertest'
import { server, app } from '../../../../../src/index'
import moviesData from '../../../../../src/dataset/movies.json'
import moviesController from '../../../../../src/actions/movies/movies'
import moviesDataAsc from '../../../../../src/dataset/moviesAsc.json'
import moviesDataAscTomato from '../../../../../src/dataset/moviesAscTomato.json'
import moviesDataDesc from '../../../../../src/dataset/moviesDesc.json'
import moviesDataDescTomato from '../../../../../src/dataset/moviesDescTomato.json'



describe('Test movies.getAllMovies', () => {
    afterAll(() => {
        server.close()
    })

    test('Deveria retornar todas las peliculas', async () => {
            const allMoviesList = moviesController.getAllMovies()
            expect(allMoviesList).toBe(moviesData)

    })
})





describe('Test movies.movieByName', () => {
    afterAll(() => {
        server.close()
    })

    test('Deveria retornar los datos de The Land Girls', async () => {
            const allMoviesList = moviesController.getMoviesByName("The Land Girls")
            expect(allMoviesList).toEqual([{"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071}])

    })
}) 






describe('Test movies.getMoviesByClassifier idbm asc', () => {
    afterAll(() => {
        server.close()
    })

    test('Deveria retornar la lista ordenada ascendete de imdb', async () => {
            const allMoviesList = moviesController.getMoviesByClassifier("imdb","asc")
            expect(allMoviesList).toEqual(moviesDataAsc)
    })
}) 







describe('Test movies.getMoviesByClassifier idbm desc', () => {
    afterAll(() => {
        server.close()
    })

    test('Deveria retornar la lista ordenada descendente de imdb', async () => {
            const allMoviesList = moviesController.getMoviesByClassifier("imdb","desc")
            expect(allMoviesList).toEqual(moviesDataDesc)
    })
}) 






describe('Test movies.getMoviesByClassifier rotten asc', () => {
    afterAll(() => {
        server.close()
    })

    test('Deveria retornar la lista ordenada ascendete de rotten tomatoes', async () => {
            const allMoviesList = moviesController.getMoviesByClassifier("rotten","asc")
            expect(allMoviesList).toEqual(moviesDataAscTomato)
    })
}) 





describe('Test movies.getMoviesByClassifier rotten desc', () => {
    afterAll(() => {
        server.close()
    })

    test('Deveria retornar la lista ordenada ascendete de imdb', async () => {
            const allMoviesList = moviesController.getMoviesByClassifier("rotten","desc")
            expect(allMoviesList).toEqual(moviesDataDescTomato)
    })
}) 

