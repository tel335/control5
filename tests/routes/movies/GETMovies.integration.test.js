import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesData from '../../../src/dataset/movies.json'
import moviesActions from '../../../src/actions/movies/movies'
import sinon from "sinon"


/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */
 describe('GET /api/movies', () => {
    afterAll(() => {
        server.close()
    })
    
    test('should respond ok status 200 with movies message GET /api/movies', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesData)
    })

    test('should respond status 500 wiouth data GET /api/movies', async () => {
        sinon.stub(moviesActions,'getAllMovies').returns()
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body.message).toEqual('Hubo un error al mostrar toda la lista')
    })
    
})


