import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'

let name = 'The Land Girls'

describe('GET /api/movies:name', () => {
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond an array with the movies', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns(getMockMovies()) //sinon.stub( variable que trae todas las funciones, nombre de la función (lo que va despues del .export))
        const response = await request(app.callback()).get('/api/movies/:name')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })

    test('should respond an empty array if there are no movies', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns([])
        const response = await request(app.callback()).get('/api/movies/:name')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
    })
})

function getMockMovies(){
    return [
        {"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071}
    ]
}

