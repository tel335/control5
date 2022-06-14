import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesActions from '../../../src/actions/movies/movies'
import sinon from 'sinon'



describe('GET /MoviesByClassifier', () => {
    beforeEach(() => {
        sinon.restore()
    })
    
    afterAll(() => {
        server.close()
    })

    test('should respond movies data', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies/IMDB Rating')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })
    
    test('should respond status 200 if it did not find movies data', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getFAILMockMovies())
        const response = await request(app.callback()).get('/api/movies/IMDB Rating')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })
})


function getMockMovies() {
    return{
        "name": "lala",
        "IMDB Rating": 6
    }
}

function getFAILMockMovies(){
    return undefined
}