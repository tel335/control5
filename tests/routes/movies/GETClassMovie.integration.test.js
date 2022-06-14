import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import router from '../../../src/routes'

describe('GET /api/movies/rating', ()=>{

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('En caso de que venga cualquier otro valor, devolver mensaje de error con status 500', async () =>{
        const response = await request(app.callback()).get('/imdb/cualquiera')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({message: 'ERROR'})
    })
})