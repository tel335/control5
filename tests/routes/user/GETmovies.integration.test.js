import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import GETMoviesByName from '../../../src/routes/movies/GETMoviesByName'
import {getAllMovies,getMoviesByName} from '../../../src/actions/movies/movies.js'
import GetAllMovies from '../../../src/actions/movies/movies.js'
import ListOfMovies from '../../../src/dataset/movies.json'
describe('GET /api/movies', () => {

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond with the list of all movies', async () => {

        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(ListOfMovies)
    })

    test('should respond with an empty array', async () => {
        sinon.stub(GetAllMovies,'getAllMovies').returns(MockEmptyArray())
        const response = await request(app.callback()).get('/api/movies')
        //expect(response.status).toBe(500)
        expect(response.body).toEqual([])
     })

     test('should respond with all movies with that word in the title', async () => {
       
    
        const response = await request(app.callback()).get('/api/movies/:Batman') //Aqui se debe modificar para buscar un titulo de pelicula dentro de la lista
        expect(response.status).toBe(200)
        expect(response.body).toEqual(SearchMovie(ListOfMovies,'Batman')) //Esta funcion buscara y retornara todos los titulos relacionas con ese nombre
        
       /*const response = await request(app.callback()).get('/api/movies/batman')
        expect(response.body[0].Title).toMatch(/Batman Returns/)*/
    })

    test('should respond with an empty array ', async () => {
         const response = await request(app.callback()).get('/api/movies/: Holaaa') 
         expect(response.status).toBe(200)
         expect(response.body).toEqual(SearchMovie(ListOfMovies,' Holaaa'))
     })


     test('should respond with the selected movie', async () => {
        sinon.stub(GetAllMovies,'getAllMovies').returns(MockArray())
        let arr = MockArray()
    
     //   expect(getAllMovies).toEqual(arr[0].title=="Batman") 
     //Para testear la funcion Searchmovies
    })
})



function MockEmptyArray(){
    return []
}

function MockArray(){
    return [
        {
            title: 'Batman',
            year: '2022'
        },
        {
            title: 'Star Wars',
            year: '1977'
        }
    ]
}
function SearchMovie(array,name){
    var result = [];
    var Titlesearch = "Title:";
    var nameSearch = name;
    for (var i=0 ; i < array.length ; i++)
    {
    if (array[i][Titlesearch] == nameSearch) {
        result.push(array[i]);
     }
    }   
    return result
}
