import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'


describe('GET/api/movies', () => {
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

    test('should respond an array of all the movies that contains the name with status 200', async () => {
        const response = await request(app.callback()).get('/api/movies/The Land Girls')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovieName())
    })
    test('should respond with "No se han encontrado coincidencias" message when there are no coincidence, status 200', async () => {
        const response = await request(app.callback()).get('/api/movies/sjdjsd')
        expect(response.status).toBe(200)
        expect(response.body.message).toEqual('No se han encontrado coincidencias')
    })


})

function getMockMovieName () {
    return [
        {"Title": "The Land Girls",
         "US Gross": 146083,
          "Worldwide Gross": 146083, 
          "US DVD Sales": null, 
          "Production Budget": 8000000, 
          "Release Date": "Jun 12 1998", 
          "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", 
          "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, 
          "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071}
    ]
}

