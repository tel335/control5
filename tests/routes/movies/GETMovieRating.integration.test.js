import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'

/**
 * El objetivo de este test de integración es probar
 * el endpoint para listar todas las movies con los parámetros 'classifier' y 'order'                          HU3
 */
describe('GET /api/movies/rating/:classifier/:order', () => {
    /**
     * beforeEach
     * afterEach
     * beforeAll
     * afterAll
     */
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond a status 500 if there are no movies coincidence', async () => {           //Caso no existan coincidencias
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })

    test('should respond an array with movies if that data exists', async () => {                 //Caso existan coincidencias
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })
})

function getMockMovies() 
{
    return{
        "name": "Braveheart",
        "Classifier": "imdb",
        "Order": "asc"
    }
}

function getMockMovies2() 
{
    return{
        "name": "The Land Girls",
        "Classifier": "IMDB",
        "Order": "des"
    }
}

//{"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071},
  //  {"Title": "First Love, Last Rites", "US Gross": 10876, "Worldwide Gross": 10876, "US DVD Sales": null, "Production Budget": 300000, "Release Date": "Aug 07 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Strand", "Source": null, "Major Genre": "Drama", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.9, "IMDB Votes": 207},
   // {"Title": "I Married a Strange Person", "US Gross": 203134, "Worldwide Gross": 203134, "US DVD Sales": null, "Production Budget": 250000, "Release Date": "Aug 28 1998", "MPAA Rating": null, "Running Time min": null, "Distributor": "Lionsgate", "Source": null, "Major Genre": "Comedy", "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.8, "IMDB Votes": 865},
    
