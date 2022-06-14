import request from 'supertest'
import {server,app} from '../../../src/index'
import sinon from "sinon";
//importo los datos
import movies from '../../../src/dataset/movies.json'
//importo el actions de movies
import moviesAction from '../../../src/actions/movies/movies'

describe('GET /api/movies',() =>
    {
        afterAll(() => {
            server.close()
        })
        beforeEach(() => {
            sinon.restore()
        })
        test('el test deberia responder con un array vacio debido a que no se encontraron peliculas',async()=>{
            sinon.stub(moviesAction, 'getAllMovies').returns(getAllMoviesMockStatus())
            //Le pasamos el callback de la instancia del server corriendo
            const response = await request(app.callback()).get('/api/movies')
            //Se considera que devolver un array vacio es no devolver data ya que data = lista de peliculas
            expect(response.status).toBe(500)
            // El expected es 500 entonces muestra el error
            expect(response.body).toEqual({status:500 ,message: "Hubo un error al mostrar toda la lista"})
        })
        test('el test deberia responder con un array de peliculas debido a que si existen hay peliculas',async()=>{
            //Le pasamos el callback de la instancia del server corriendo
            const response = await request(app.callback()).get('/api/movies')
            //Se considera que devolver un array vacio es no devolver data ya que data = lista de peliculas
            expect(response.status).toBe(200)
            expect(response.body).toEqual(movies)
        })
        function getAllMoviesMockStatus(){
            return;
        }
        function getMoviesByNameMock(){
            var Li
        }
    }
)