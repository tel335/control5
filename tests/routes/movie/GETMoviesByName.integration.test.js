import request from 'supertest'
import {server,app} from '../../../src/index'
import sinon from "sinon";
//importo los datos
import movies from '../../../src/dataset/movies.json'
import moviesAction from "../../../src/actions/movies/movies";

describe('GET /api/movies/:',() =>
    {
        afterAll(() => {
            server.close()
        })
        beforeEach(() => {
            sinon.restore()
        })
        test('el test deberia responder con un array vacio debido a que no se encontraron peliculas por el nombre entregado',async()=>{
            //Le pasamos el callback de la instancia del server corriendo
            const response = await request(app.callback()).get('/api/movies/'+getMockMoviesByNameNotExist())
            //Se considera que devolver un array vacio es no devolver data ya que data = lista de peliculas
            expect(response.status).toBe(200)
            // El expected es 200 entonces muestra el error
            expect(response.body).toEqual([])
        })
        test('el test deberia responder con un array de peliculas debido a que si existen hay peliculas',async()=>{
            sinon.stub(moviesAction, 'getMoviesByName').returns(getMockMoviesByNameYesExistBatman())
            //Le pasamos el callback de la instancia del server corriendo
            const response = await request(app.callback()).get('/api/movies/'+getMockMoviesByNameYesExist())
            //Se considera que devolver un array vacio es no devolver data ya que data = lista de peliculas
            expect(response.status).toBe(200)
            expect(response.body).toEqual(getMockMoviesByNameYesExistBatman())
        })
        function getMockMoviesByNameNotExist(){
            let name = "HOLANOEXISTO"
            return name
        }
        function getMockMoviesByNameYesExist(){
            let nameExist = "Batman Returns"
            return nameExist
        }
        function getMockMoviesByNameYesExistBatman(){
            let response = [{"Title":"Batman Returns","US Gross":162831698,"Worldwide Gross":266822354,"US DVD Sales":null,"Production Budget":80000000,"Release Date":"Jun 18 1992","MPAA Rating":"PG-13","Running Time min":null,"Distributor":"Warner Bros.","Source":"Original Screenplay","Major Genre":"Action","Creative Type":"Super Hero","Director":"Tim Burton","Rotten Tomatoes Rating":78,"IMDB Rating":6.9,"IMDB Votes":78673}]
            return response
        }
    }
)