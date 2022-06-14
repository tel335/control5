import request from 'supertest'
import { server, app } from '../../../../../src/index'
import moviesData from '../../../../../src/dataset/movies.json'


describe('GET /api/movies/:name', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies/The Land Girls')
        if(response.body == [{"Title": "The Land Girls", "US Gross": 146083, "Worldwide Gross": 146083, "US DVD Sales": null, "Production Budget": 8000000, "Release Date": "Jun 12 1998", "MPAA Rating": "R", "Running Time min": null, "Distributor": "Gramercy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 6.1, "IMDB Votes": 1071}])
        {            
            expect(response.status).toBe(200)
        }


               })
}) 

describe('GET /api/movies/:name', () => {
    afterAll(() => {
        server.close()
    })
    test('Deveria retornar todas las peliculas y 200', async () => {
        const response = await request(app.callback()).get('/api/movies/asdksaljdskaldklsakdj')
            expect(response.status).toBe(200)
            expect(response.body).toEqual({ message: "No se han encontrado coincidencias", status: 200 })

    })
}) 
