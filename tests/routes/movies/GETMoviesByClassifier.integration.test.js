import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import movieActions from '../../../src/actions/movies/movies'

/**
 * El objetivo de este test de integración es probar
 * el endpoint para listar todas las peliculas en orden de clasificación por IMDB o RottenTomatoes
 */
describe('GET /api/movies/rating/"classifier"/desc', () => {

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond an array with movies if that data exists in IMDB (desc)', async () => {

        sinon.stub(movieActions, 'getAllMovies').returns(getMockMoviesIMDBDesc())
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMoviesIMDBDesc())
    })
    test('should respond an array with movies if that data exists in Rotten (desc)', async () => {

        sinon.stub(movieActions, 'getAllMovies').returns(getMockMoviesRottenDesc())
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMoviesRottenDesc())
    })
    test('should respond an array with movies if that data exists in IMDB (asc)', async () => {

        sinon.stub(movieActions, 'getAllMovies').returns(getMockMoviesIMDBAsc())
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMoviesIMDBAsc())
    })
    test('should respond an array with movies if that data exists in Rotten (asc)', async () => {

        sinon.stub(movieActions, 'getAllMovies').returns(getMockMoviesRottenAsc())
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMoviesRottenAsc())
    })
})

/**
 * Se agrega un Mock con las 2 primeras peliculas en orden descendente de IMDB
 */
function getMockMoviesIMDBDesc (){
    return [
            {
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
            },
            {
                "Title": "The Shawshank Redemption",
                "US Gross": 28241469,
                "Worldwide Gross": 28241469,
                "US DVD Sales": null,
                "Production Budget": 25000000,
                "Release Date": "Sep 23 1994",
                "MPAA Rating": "R",
                "Running Time min": null,
                "Distributor": "Sony Pictures",
                "Source": "Based on Book/Short Story",
                "Major Genre": "Drama",
                "Creative Type": "Historical Fiction",
                "Director": "Frank Darabont",
                "Rotten Tomatoes Rating": 88,
                "IMDB Rating": 9.2,
                "IMDB Votes": 519541
            }]
}
/**
 * Se agrega un Mock con las 2 primeras peliculas en orden descendente de RottenTomatoes
 */
 function getMockMoviesRottenDesc (){
    return [
            {
                "Title": "Annie Get Your Gun",
                "US Gross": 8000000,
                "Worldwide Gross": 8000000,
                "US DVD Sales": null,
                "Production Budget": 3768785,
                "Release Date": "May 17 1950",
                "MPAA Rating": null,
                "Running Time min": null,
                "Distributor": "MGM",
                "Source": "Based on Book/Short Story",
                "Major Genre": "Musical",
                "Creative Type": null,
                "Director": null,
                "Rotten Tomatoes Rating": 100,
                "IMDB Rating": 7.1,
                "IMDB Votes": 1326
            },
            {
                "Title": "Before Sunrise",
                "US Gross": 5274005,
                "Worldwide Gross": 5274005,
                "US DVD Sales": null,
                "Production Budget": 2500000,
                "Release Date": "Jan 27 1995",
                "MPAA Rating": "R",
                "Running Time min": null,
                "Distributor": "Sony Pictures",
                "Source": "Original Screenplay",
                "Major Genre": "Drama",
                "Creative Type": "Contemporary Fiction",
                "Director": "Richard Linklater",
                "Rotten Tomatoes Rating": 100,
                "IMDB Rating": 8,
                "IMDB Votes": 39705
            }]
}
/**
 * Se agrega un Mock con las 2 primeras peliculas en orden ascendente de IMDB
 */
 function getMockMoviesIMDBAsc (){
    return [
        {
            "Title": "Mississippi Mermaid",
            "US Gross": 24551,
            "Worldwide Gross": 2624551,
            "US DVD Sales": null,
            "Production Budget": 1600000,
            "Release Date": "Jan 15 1999",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": "MGM",
            "Source": null,
            "Major Genre": null,
            "Creative Type": null,
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": null,
            "IMDB Votes": null
        },
        {
            "Title": "Tora, Tora, Tora",
            "US Gross": 29548291,
            "Worldwide Gross": 29548291,
            "US DVD Sales": null,
            "Production Budget": 25000000,
            "Release Date": "Sep 23 1970",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": null,
            "Source": null,
            "Major Genre": null,
            "Creative Type": null,
            "Director": "Richard Fleischer",
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": null,
            "IMDB Votes": null
        }]
}
/**
 * Se agrega un Mock con las 2 primeras peliculas en orden ascendente de RottenTomatoes
 */
 function getMockMoviesRottenAsc (){
    return [
        {
            "Title": "Mississippi Mermaid",
            "US Gross": 24551,
            "Worldwide Gross": 2624551,
            "US DVD Sales": null,
            "Production Budget": 1600000,
            "Release Date": "Jan 15 1999",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": "MGM",
            "Source": null,
            "Major Genre": null,
            "Creative Type": null,
            "Director": null,
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": null,
            "IMDB Votes": null
        },
        {
            "Title": "Tora, Tora, Tora",
            "US Gross": 29548291,
            "Worldwide Gross": 29548291,
            "US DVD Sales": null,
            "Production Budget": 25000000,
            "Release Date": "Sep 23 1970",
            "MPAA Rating": null,
            "Running Time min": null,
            "Distributor": null,
            "Source": null,
            "Major Genre": null,
            "Creative Type": null,
            "Director": "Richard Fleischer",
            "Rotten Tomatoes Rating": null,
            "IMDB Rating": null,
            "IMDB Votes": null
        }]
}