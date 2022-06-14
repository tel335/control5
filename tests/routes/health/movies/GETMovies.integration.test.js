import request from 'supertest'
import { server, app } from '../../../../src/index'
import sinon from 'sinon'
import moviesAction from '../../../../src/actions/movies/movies'
import movies from '../../../../src/dataset/movies.json'
/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */

describe('GET /movies', () => {
    afterAll(() => {
        server.close()
    })
    afterEach(() => {
        sinon.restore()
    })
    beforeEach(() => {
        sinon.restore()
    })



    test('Retorna 200 si el data existe', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(movies)
    })

    test('devuelve error 500 si los datos no existen', async () => {
        sinon.stub(moviesAction, 'getAllMovies').returns(getMovies())
        const response = await request(app.callback()).get('/api/movies')
        console.log(response.body)
        console.log(response.status)
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ status: 500, message: 'Hubo un error al mostrar toda la lista' })
    })

    test(' Una petición REST, con un parámetro name y devuelve todas las peliculas por nombre', async () => {
       // sinon.stub(moviesAction, 'getAllMovies').returns(getMovies())
        const name2 = '/api/movies/:' + getNameMovies()
        const response = await request(app.callback()).get(name2)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(respuesta())
    })

    test(' Una petición REST, con un parámetro name y no devuelve', async () => {
        const name = '/api/movies/:' + getMoviesForName2()
        const response = await request(app.callback()).get(name)
        console.log(response.status)

        console.log(response.body)
        expect(response.status).toBe(200)
        expect(response.body).toEqual({status: 200, message: 'No se han encontrado coincidencias' })
    })
})


function getMovies () {
    return
}

function getMoviesForName(){
    return []
}

function getMoviesForName2(){
    return 'dsadas'

}

function getNameMovies(){
    return 'This Christmas'
}
function respuesta(){
return   {"Title": "This Christmas", "US Gross": 49121934, "Worldwide Gross": 49778552, "US DVD Sales": 17922664, "Production Budget": 13000000, "Release Date": "Nov 21 2007", "MPAA Rating": "PG-13", "Running Time min": 118, "Distributor": "Sony/Screen Gems", "Source": "Original Screenplay", "Major Genre": "Drama", "Creative Type": "Contemporary Fiction", "Director": null, "Rotten Tomatoes Rating": 55, "IMDB Rating": 5.4, "IMDB Votes": 3351}
}