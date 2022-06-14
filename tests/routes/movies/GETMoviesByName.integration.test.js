import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import movieActions from '../../../src/actions/movies/movies'


/**
 * El objetivo de este test de integración es probar
 * el endpoint para las peliculas que contengan cierta palabra en su nombre
 */
describe('GET /api/movies/batman', () => {

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond an array with movies if that data exists when searching "batman"', async () => {
        sinon.stub(movieActions, 'getAllMovies').returns(getMockMovies1())
        const response = await request(app.callback()).get('/api/movies/batman')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies1())
    })
    
})

/**
 * Se agrega un Mock con las 2 primeras peliculas al buscar "batman"
 */
function getMockMovies1 (){
    return [
            {
                "Title": "Batman Returns",
                "US Gross": 162831698,
                "Worldwide Gross": 266822354,
                "US DVD Sales": null,
                "Production Budget": 80000000,
                "Release Date": "Jun 18 1992",
                "MPAA Rating": "PG-13",
                "Running Time min": null,
                "Distributor": "Warner Bros.",
                "Source": "Original Screenplay",
                "Major Genre": "Action",
                "Creative Type": "Super Hero",
                "Director": "Tim Burton",
                "Rotten Tomatoes Rating": 78,
                "IMDB Rating": 6.9,
                "IMDB Votes": 78673
            },
            {
                "Title": "Batman Forever",
                "US Gross": 184031112,
                "Worldwide Gross": 336529144,
                "US DVD Sales": null,
                "Production Budget": 100000000,
                "Release Date": "Jun 16 1995",
                "MPAA Rating": "PG-13",
                "Running Time min": null,
                "Distributor": "Warner Bros.",
                "Source": "Original Screenplay",
                "Major Genre": "Action",
                "Creative Type": "Super Hero",
                "Director": "Joel Schumacher",
                "Rotten Tomatoes Rating": 43,
                "IMDB Rating": 5.4,
                "IMDB Votes": 76218
            }]
}