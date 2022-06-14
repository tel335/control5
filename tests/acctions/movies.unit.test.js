const { getMoviesName, getMoviesName2 } = require('../src/actions/movies/movies')


test('Muestra toda la lista',  () => {
    
    const response = request.get(getMockMovies())
    expect(response.body).toEqual(getMockMovies())
})

test('debería retornar verdadero si el input es name', () => {
    const result = getMoviesName('name')
    expect(result).toBe(true)
})

test('debería retornar verdadero si el input es name2', () => {
    const result = getMoviesName2('name2')
    expect(result).toBe(true)
})



function getMockMovies() 
{
    return{
        "name": "movie"
    }
}