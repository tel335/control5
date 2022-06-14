import request from 'supertest'
import { server, app } from '../../../../../src/index'
import moviesDataAsc from '../../../../../src/dataset/moviesAsc.json'
import moviesDataAscTomato from '../../../../../src/dataset/moviesAscTomato.json'
import moviesDataDesc from '../../../../../src/dataset/moviesDesc.json'
import moviesDataDescTomato from '../../../../../src/dataset/moviesDescTomato.json'
describe('GET /api/movies/rating/imdb/asc', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
                    expect(response.status).toBe(200)
                    expect(response.body).toEqual(moviesDataAsc)
    })
}) 

describe('GET /api/movies/rating/imdb/desc', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
                    expect(response.status).toBe(200)
                    expect(response.body).toEqual(moviesDataDesc)

    })
}) 

describe('GET /api/movies/rating/rotten/desc', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
                    expect(response.status).toBe(200)
                    expect(response.body).toEqual(moviesDataDescTomato)
    })
}) 

describe('GET /api/movies/rating/rotten/asc', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
                    expect(response.status).toBe(200)
                    expect(response.body).toEqual(moviesDataAscTomato)
    })
}) 


describe('GET /api/movies/rating/rotten/asc', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')

                    expect(response.status).toBe(200)
                    expect(response.body).toEqual(moviesDataAscTomato)
    })
}) 


describe('GET /api/movies/rating/rotten/error', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar el mensaje de error y el status', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/error')
            expect(response.body).toEqual({ message: 'Hubo un error al mostrar toda la lista', status: 500 })
            expect(response.status).toBe(500)
    })
}) 
