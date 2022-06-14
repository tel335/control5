import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesActions from '../../../src/actions/movies/movies'
import sinon from 'sinon'

describe('GET /api/movies/rating/:classifier/:order', () => {
    beforeEach(() => {
        sinon.restore()
    })
    
    afterAll(() => {
        server.close()
    })

    test('should respond movies data', async () => {
        sinon.stub(moviesActions, 'getMoviesByName ').returns(getMockMovies()) //sinon.stub( variable que trae todas las funciones, nombre de la función (lo que va despues del .export))
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })
    
    test('should respond status 500 if it did not find movies data', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns(getFAILMockMovies())
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })
})

function getMockMovies() 
{
    return{
        "name": " "
    }
}

function getFAILMockMovies(){
    return undefined
}