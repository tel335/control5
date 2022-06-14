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

    test('Muestra toda la lista', async () => {
        sinon.stub(moviesActions, 'getAllMovies').returns(getMockMovies()) 
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })
    
    test('no muestra toda la lista', async () => {
        sinon.stub(moviesActions, 'getAllMovies').returns(getFAILMockMovies())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })
})


function getMockMovies() 
{
    return{
        "name": "movie"
    }
}

function getFAILMockMovies(){
    return undefined
}

   



