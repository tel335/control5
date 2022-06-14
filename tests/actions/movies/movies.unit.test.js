import moviesController from '../../../src/actions/movies/movies'

describe('Test movies actions', ()=>{
    /* test('deberia retornar todas las peliculas', ()=>{
    const result = moviesController.getAllMovies()
    expect(result.st).toBe()
    }) */

    test('deberia retornar todas las peliculas', ()=>{
        const result = moviesController.getMoviesByName('Batman')
        expect(result.length).toBe(6)
        //expect(result[0]).toEqual(getMockMovie)
    })

    test('deberia retornar todas las peliculas', ()=>{
        const result = moviesController.getMoviesByName('fransa')
        expect(result).toEqual([])
    })

    test('debe retornar indefinido porque no cumple con los parametros de clasificacion', ()=>{
        const result = moviesController.getClassifierParam('cualquiera')
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido 2 porque no cumple con los parametros de clasificacion', ()=>{
        const result = moviesController.getClassifierParam('')
        expect(result).toEqual(undefined)
    })
    test('debe retornar indefinido 3 porque no cumple con los parametros de clasificacion', ()=>{
        const result = moviesController.getClassifierParam([])
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido 4 porque no cumple con los parametros de clasificacion', ()=>{
        const result = moviesController.getClassifierParam('4')
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido porque no cumple con los parametros de orden', ()=>{
        const result = moviesController.getOrderParam('cualquiera')
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido 2 porque no cumple con los parametros de orden', ()=>{
        const result = moviesController.getOrderParam('')
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido 3 porque no cumple con los parametros de orden', ()=>{
        const result = moviesController.getOrderParam([])
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido 4 porque no cumple con los parametros de orden', ()=>{
        const result = moviesController.getOrderParam(10)
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido porque no cumple con los parametros', ()=>{
        const result = moviesController.getMoviesByClassifier('cualquiera')
        expect(result).toEqual(undefined)
    })
    test('debe retornar indefinido porque no cumple con los parametros 2', ()=>{
        const result = moviesController.getMoviesByClassifier('')
        expect(result).toEqual(undefined)
    })

    test('debe retornar indefinido porque no cumple con los parametros 3', ()=>{
        const result = moviesController.getMoviesByClassifier([])
        expect(result).toEqual(undefined)
    })
    test('debe retornar indefinido porque no cumple con los parametros 4', ()=>{
        const result = moviesController.getMoviesByClassifier()
        expect(result).toEqual(undefined)
    })

})

