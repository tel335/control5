import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'

describe('GET /api/movies', () => {
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond an empty array if there are no movies', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual([])
    })

    test('should respond an array with movies if that data is present', async () => {
        sinon.stub(moviesActions, 'getAllMovies').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })
})

function getMockMovies () {
    return [
        {
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
        },
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