import request from 'supertest'
import { server, app } from '../../../src/index'
import GETMoviesByName from '../../../src/routes/movies/GETMoviesByName'
import sinon from 'sinon';


describe('GET /api/movies/:name', () => {

    afterAll(() => {
        server.close()
    })

    test('Devolver nombre de películas', async () => {
        sinon.stub(GETMoviesByName, 'GETMoviesByName').returns(getName())
        const response = await request(app.callback()).get('/api/movies/Tom Jones')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([getName()])
        //sinon: sinon.stub(‘myFile’, myFunction).throws(new Error(‘error’))
        //sinon.stub('/api/movies/Tom Jones', "post").throws(
        //    new Error({
        //      response: {status: 500},
        //    })
        //)
        
    })
})

function getName (){
    return{
        "Title": "Tom Jones", "US Gross": 37600000, "Worldwide Gross": 37600000, "US DVD Sales": null, "Production Budget": 1000000, "Release Date": "Oct 07 1963", "MPAA Rating": null, "Running Time min": null, "Distributor": null, "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 81, "IMDB Rating": 7, "IMDB Votes": 4035
    }
}