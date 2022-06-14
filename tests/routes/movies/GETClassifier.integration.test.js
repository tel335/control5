import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'


/*
CUANDO: Se acceda al endpoint /api/movies/rating/:classifier/:order

ENTONCES: Deberá devolver todas las películas ordenadas según classifier y order, con status 200. 
Classifier solamente puede tomar 2 valores: imdb o rotten (Ordenar según el ranking IMDB, o el ranking Rotten Tomatoes).
 Order solo puede tomar 2 valores: asc o desc (Ordena de forma ascendente o descendente, 
según el número dado por el ranking seleccionado, si es imdb o rotten).
 En caso de que venga cualquier otro valor, devolver mensaje de error con status 500. */


 describe('GET /api/movies/rating', () => {

    beforeEach(() => {
        sinon.restore()
    })

    /*afterEach(() => {
        //userActions.clearUsers()
    })*/

    afterAll(() => {
        // Cerramos el servidor
        server.close()
    })

    test('should respond with status 500 if parameter of order is not correct', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asddsa')
        expect(response.status).toEqual(500)
    })

    test('should respond with status 500 if parameter of classifier is not correct', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/isad/desc')
        expect(response.status).toEqual(500)
    })

    function getMockMovies () {
        return [
            {"Title": "B",
             "US Gross": 146083, 
              "Rotten Tomatoes Rating": null, "IMDB Rating": 5.1, "IMDB Votes": 1071},
            {"Title": "A",
             "US Gross": 146083, 
              "Rotten Tomatoes Rating": 78, "IMDB Rating": 6.1, "IMDB Votes": 1071},
            {"Title": "C",
            "US Gross": 146083, 
            "Rotten Tomatoes Rating": 42, "IMDB Rating": 4.1, "IMDB Votes": 1071},
        ]
    }

})
