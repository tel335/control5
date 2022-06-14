import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import router from '../../../src/routes'

const jsonData= require('../../../src/dataset/movies.json'); 
/* import jsonData from '../../../src/dataset/movies2.json' */

describe('GET /api/movies', ()=>{

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('Si no devuelve data, debe mostrar un mensaje de error con status 500.', async () =>{
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual([])
    })

    test('Si no devuelve data, debe mostrar un mensaje de error con status 500.', async () =>{
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual(null)
    })

    test('Deberá devolver toda la lista de películas con mensaje 200', async () =>{
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(jsonData)
    })

})

