import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import movieActions from '../../../src/actions/movies/movies'

describe('GET /api/movies', () => {
  
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('return de las peliculas por nombre', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock2())
        const response = await request(app.callback()).get('/api/movies/Slam')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMock2())
    })

    test('return vacio si el nombre no se encuentra', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock2())
        const response = await request(app.callback()).get('/api/movies/BLABLABLAA@')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
    })
})

function getMock2 () {
    return [
        {"Title": "Slam", "US Gross": 1009819, 
        "Worldwide Gross": 1087521, 
        "US DVD Sales": null, 
        "Production Budget": 1000000, 
        "Release Date": "Oct 09 1998", 
        "MPAA Rating": "R", 
        "Running Time min": null, 
        "Distributor": "Trimark", 
        "Source": "Original Screenplay", 
        "Major Genre": "Drama", 
        "Creative Type": "Contemporary Fiction", 
        "Director": null, 
        "Rotten Tomatoes Rating": 62, 
        "IMDB Rating": 3.4, 
        "IMDB Votes": 165}
    ]
}