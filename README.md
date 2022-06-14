# Integration / unit tests Quiz

En este control se espera que usted pueda implementar una serie de tests unitarios y de integración para asegurar que los criterior de aceptación que describiré a continuación, se cumplan.
Antes, asegúrese de instalar las dependencias necesarias:

a

```
npm install
```

Para verificar que todo anda OK, puede ejecutar el comando de tests:

```
npm run test
```

Coverage:

```
npm run coverage
```

Puede levantar el servidor con el comando:

```
npm start
```

## Criterios de aceptación

El backend que hemos desarrollado, consiste en un servicio que devuelve información sobre películas (Fecha de estreno, clasificación, director, etc.). La estructura de datos devuelta, consiste en un arreglo de objetos "movie" dentro del cual vendrá la información antes descrita.
Como buenos ingenieros, debemos asegurar que nuestro código cumple con los criterios de aceptación para poder marcar la funcionalidad como terminada.
Para esto, deberemos de cumplir con los siguientes criterios de aceptación:

```
DADO: Una petición REST, sin parámetros adicionales

CUANDO: Se acceda al endpoint /api/movies

ENTONCES: Deberá devolver toda la lista de películas, en el caso que existan, con status 200. Si no devuelve data, debe mostrar un mensaje de error con status 500.
```

```
DADO: Una petición REST, con un parámetro 'name'

CUANDO: Se acceda al endpoint /api/movies/:name

ENTONCES: Deberá devolver todas las películas que contengan el parámetro de búsqueda en el título, status 200. En el caso que no existan resultados (arreglo vacío), deberá devolver el mensaje "No se han encontrado coincidencias", con status 200.
```

```
DADO: Una petición REST, con los parámetros 'classifier' y 'order'

CUANDO: Se acceda al endpoint /api/movies/rating/:classifier/:order

ENTONCES: Deberá devolver todas las películas ordenadas según classifier y order, con status 200. Classifier solamente puede tomar 2 valores: imdb o rotten (Ordenar según el ranking IMDB, o el ranking Rotten Tomatoes). Order solo puede tomar 2 valores: asc o desc (Ordena de forma ascendente o descendente, según el número dado por el ranking seleccionado, si es imdb o rotten). En caso de que venga cualquier otro valor, devolver mensaje de error con status 500.
```

### Importante

Si el código como está no cumple con alguno de los casos de uso, puede modificar el código para que si lo haga.

# Bonus (20 puntos)

Solo si le queda tiempo (puntos extra a la nota), implemente (con tests asociados claro está):

```
DADO: Una petición REST, con el parámetro 'limit'

CUANDO: Se acceda a cualquiera de los endpoint, sumando el query string '?limit=10' (ejemplo: /api/movies?limit=10)

ENTONCES: Deberá devolver la lista de películas según el caso de uso de cada endpoint, pero en este caso, limitar el número de resultados a lo que venga como parámetro en limit. Por ejemplo, en el caso '/api/movies?limit=10', de todas las películas que podría devolver, debería devolver solo las 10 primeras en el arreglo. En caso de que el número de limit sea mayor a la cantidad de datos en el arreglo, use el menor de ambos (suponga que el resultado da un arreglo de 5, y limit tiene 10, por tanto la respuesta será el arreglo de 5 elementos).
```

# Evaluación

- Coverage (Promedio entre %Funcs y %Lines) >= 80 => 20 puntos (Se aplicará regla de 3 simple, es decir, puntaje = myCoverage * (20/80), si tiene coverage > 80 le suma puntos!!!)

- Tests de integración /api/movies => 20 puntos (Más es mejor, considere casos de borde)

- Tests de integración /api/movies/:name => 20 puntos

- Tests de integración /api/movies/rating/:classifier/:order => 20 puntos

- Tests unitarios moviesController => 20 puntos
