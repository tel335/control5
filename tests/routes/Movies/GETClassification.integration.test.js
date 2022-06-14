import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'

let classifier = 'imdb'
let order = 'asc'

describe('GET /api/movies/:classifier/:order', () => {
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond an array with the movies classified by classifier and order', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getMockMovies()) //sinon.stub( variable que trae todas las funciones, nombre de la función (lo que va despues del .export))
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })

    test('should respond an empty array if there are no movies', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(undefined)
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })
})

function getMockMovies(){
    return [
            {"Title": "Let's Talk About Sex", "US Gross": 373615, "Worldwide Gross": 373615, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Sep 11 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Fine Line", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 13, "IMDB Rating": 5.5, "IMDB Votes": null},
            {"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071},
            {"Title": "I Married a Strange Person", "US Gross": 203134, "Worldwide Gross": 203134, "US DVD Sales": null, "Production Budget": 250000, "Release Date": "Aug 28 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Lionsgate", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.8, "IMDB Votes": 865},
            {"Title": "First Love, Last Rites", "US Gross": 10876, "Worldwide Gross": 10876, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Aug 07 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Strand", "Source": null, "Major Genre": "Drama", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.9, "IMDB Votes": 207},    ]    
    }