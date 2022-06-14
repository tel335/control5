import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import router from '../../../src/routes'
import moviesActions from '../../../src/actions/movies/movies'
const jsonData= require('../../../src/dataset/movies.json'); 


describe('GET /api/movies', ()=>{

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('Si no existen resultados debe mostrar un mensaje de no coincidencias con status 200.', async () =>{
        const response = await request(app.callback()).get('/api/movies/fransa')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({message: 'No se han encontrado coincidencias'})
    })

    test('Debe devolver las peliculas que contengan el parametro en el titulo', async () =>{
        const response = await request(app.callback()).get('/api/movies/man')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMovieByName('man'))
    })

})

