import request from 'supertest'
import { server, app } from '../../../src/index'

import getAllMovies from '../../../src/actions/movies/movies'
import getMoviesByName from '../../../src/actions/movies/movies'
import getMoviesByClassifier from '../../../src/actions/movies/movies'

import sinon from 'sinon'


//import GETAllMovies from '../../routes/movies/GETAllMovies'
//import GETMoviesByName from '../../src/routes/movies/GETMoviesByName'
//import GETMoviesByClassifier from '../../routes/movies/GETMoviesByClassifier'


/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */


describe('GET /api/movies', () => {
    afterAll(() => {
        server.close()
    })

    test('Lista de películas', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        
        expect(response.body).toEqual(getAllMovies.getAllMovies())
    })
})



describe('GET /api/movies/:name', () => {
    afterAll(() => {
        server.close()
    })

    test('Peliculas filtradas por nombre', async () => {
        //Con sinon

        sinon.stub(getMoviesByName, 'getMoviesByName').returns(getMockMovies())

        const response = await request(app.callback()).get('/api/movies/Charlie and the Chocolate Factory')
        
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
        
    })
})

function getMockMovies(){
    return{
        "Title": "Charlie and the Chocolate Factory", "US Gross": 206459076, "Worldwide Gross": 474459076, "US DVD Sales": null, "Production Budget": 150000000, "Release Date": "Jul 15 2005", "MPAA Rating": "PG", "Running Time min": 115, "Distributor": "Warner Bros.", "Source": "Remake", "Major Genre": "Comedy", "Creative Type": "Kids Fiction", "Director": "Tim Burton", "Rotten Tomatoes Rating": 82, "IMDB Rating": 7.1, "IMDB Votes": 102437
    }
}


describe('GET /api/movies/rating/:clasifier/:order', () => {
    afterAll(() => {
        server.close()
    })

    test('Peliculas ordenadas por IMDB descentende', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        //expect(response.body).toEqual({ message: 'ok' })
        expect(response.body).toEqual(getMoviesByClassifier.getMoviesByClassifier('imdb','desc'))
    })

    test('Peliculas ordenadas por IMDB ascendente', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        //expect(response.body).toEqual({ message: 'ok' })
        expect(response.body).toEqual(getMoviesByClassifier.getMoviesByClassifier('imdb','asc'))
    })

    test('Peliculas ordenadas por Rotten descendente', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        expect(response.status).toBe(200)
        //expect(response.body).toEqual({ message: 'ok' })
        expect(response.body).toEqual(getMoviesByClassifier.getMoviesByClassifier('rotten','desc'))
    })

    test('Peliculas ordenadas por Rotten ascendente', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        expect(response.status).toBe(200)
        //expect(response.body).toEqual({ message: 'ok' })
        expect(response.body).toEqual(getMoviesByClassifier.getMoviesByClassifier('rotten','asc'))
    })
})

/*
function getMockMovies2(){
    return{
        ["Title": "Crocodile Dundee in Los Angeles", "US Gross": 25590119, "Worldwide Gross": 39393111, "US DVD Sales": null, "Production Budget": 25000000, "Release Date": "Apr 20 2001", "MPAA Rating": "PG", "Running Time min": 95, "Distributor": "Paramount Pictures", "Source": "Original Screenplay", "Major Genre": "Adventure", "Creative Type": "Contemporary Fiction", "Director": "Simon Wincer", "Rotten Tomatoes Rating": 12, "IMDB Rating": 4.6, "IMDB Votes": 7082};
        "Title": "Les Choristes", "US Gross": 3629758, "Worldwide Gross": 83529758, "US DVD Sales": null, "Production Budget": 5500000, "Release Date": "Nov 26 2004", "MPAA Rating": "PG-13", "Running Time min": null, "Distributor": "Miramax", "Source": "Remake", "Major Genre": "Drama", "Creative Type": "Historical Fiction", "Director": null, "Rotten Tomatoes Rating": null, "IMDB Rating": 7.8, "IMDB Votes": 16391,;
        "Title": "Chairman of the Board", "US Gross": 306715, "Worldwide Gross": 306715, "US DVD Sales": null, "Production Budget": 7000000, "Release Date": "Mar 13 1998", "MPAA Rating": "PG-13", "Running Time min": null, "Distributor": "Trimark", "Source": "Original Screenplay", "Major Genre": "Comedy", "Creative Type": "Contemporary Fiction", "Director": null, "Rotten Tomatoes Rating": 14, "IMDB Rating": 2.1, "IMDB Votes": 3164
    }
}
*/