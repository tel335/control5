import movieActions from '../../../src/actions/user/user'
import sinon from 'sinon'


describe('Test movie actions', () =>{
    beforeEach(() => {
        // Para que cada prueba quede limpia, borrar los usuarios
        sinon.restore()
    })

    test('should return movie', async () => {
        movieActions.getAllMovies(getMockUser1())
        const users = movieActions.getUsers()
        
        expect(users.length).toBe(1)
        expect(users[0]).toEqual(getMockUser1())
    })



})