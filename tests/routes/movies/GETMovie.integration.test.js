import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'
import moviesData from '../../../src/dataset/movies.json'

describe('GET /api/movies/:name', () =>{

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })


    test('Deberá devolver todas las películas que contengan el parámetro de búsqueda en el título, status 200.', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns(getMockMovie1())
        const response = await request(app.callback()).get('/api/movies/Slam')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovie1())
    })

    
    test('En el caso que no existan resultados (arreglo vacío), deberá devolver el mensaje "No se han encontrado coincidencias", con status 200.', async () => {
        const response = await request(app.callback()).get('/api/movies/hola1234')
        expect(response.status).toBe(200)
        expect(response.body.message).toEqual('No se han encontrado coincidencias')
    })
    


})

function getMockMovie1 () {
    return {
        "Title": "Slam", 
        "US Gross": 1009819, 
        "Worldwide Gross": 1087521, 
        "US DVD Sales": null, 
        "Production Budget": 1000000, 
        "Release Date": "Oct 09 1998", 
        "MPAA Rating": "R", 
        "Running Time min": null, 
        "Distributor": "Trimark", 
        "Source": "Original Screenplay", 
        "Major Genre": "Drama", 
        "Creative Type": "Contemporary Fiction", 
        "Director": null, 
        "Rotten Tomatoes Rating": 62, 
        "IMDB Rating": 3.4, 
        "IMDB Votes": 165
    }
}