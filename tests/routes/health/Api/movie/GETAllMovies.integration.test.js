import request from 'supertest'
import { server, app } from '../../../../../src/index'
import moviesData from '../../../../../src/dataset/movies.json'


describe('GET /api/movies/', () => {
    afterAll(() => {
        server.close()
    })

    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies')
        //if(response.body == moviesData)
            expect(response.status).toBe(200)
            expect(response.body).toEqual(moviesData)
        //expect(response.body).toEqual( moviesData )
        //if(response.body== [])
        //    expect(response.status).toBe(500)
    })                            
}) 
