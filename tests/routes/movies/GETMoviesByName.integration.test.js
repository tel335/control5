import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'


describe('GET /api/movies', () => {

    beforeEach(() => {

        sinon.restore()

    })
  

    afterAll(() => {
        // Cerramos el servidor
        server.close()
    })
    test('se encuentra la película con el nombre', async () => {
        const response = await request(app.callback()).get('/api/movies/The Land Girls')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovie())
    })

    test('No se encuentra la película con el nombre', async () => {
        const response = await request(app.callback()).get('/api/movies/xdlol')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'No se han encontrado coincidencias' })
    })


})
    function getMockMovie () {
        return [{
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
        }]
    }

   