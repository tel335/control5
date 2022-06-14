import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesData from '../../dataset/movies.json'

const {getAllMovies} = require('../src/actions/movies/movies')


describe('GET /api/movies', () => {

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('debería retornar verdadero si el input moviesData es donde estan las peliculas', () => {
        const result = getAllMovies(moviesData)
        expect(response.status).toBe(200)
        expect(result).toBe(true)
    })

    test('debería retornar falso si el input no es moviesData', () => {
        const result = isPalindrome("movie")
        expect(response.status).toBe(500)
        expect(result).toBe(false)
    })

   
})


