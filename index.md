# INFORME PRACTICA 4
## Arrays, tuplas y enumerados
### ALBERTO RIOS DE LA ROSA
### alu0101235929@ull.edu.es

### INTRODUCCIÓN

Esta práctica tiene como objetivo principal continuar en la realización de ejercicios de programación en TypeScript, centrándonos más en ejercicios relacionados con arrays, tuplas y enumerandos, para así seguir evolucionando en nuestro aprendizaje. Además en esta práctica había que elaborar el proyecto creando las carpetas necesarias para crear la documentación de cada uno de los ejercicios en TypeScript y para poder realizar la práctica mediante el método de pruebas TDD. Primero explicaremos en un principio como crear este método de manera breve, y más tarde mostraremos la solución de cada uno de los ejercicios propuestos con una breve explicación de cada uno y una captura de pantalla en el que se muestra que se han superado las distintas pruebas de ese ejercicio superada junto al link de donde se crearon las pruebas. Si desea leer los enunciados de cada ejercicio los podrás encontrar pinchando [aqui](https://ull-esit-inf-dsi-2021.github.io/prct04-arrays-tuples-enums/)

### CREACION DEL PROYECTO CON LA ESTRUCTURA REQUERIDA

Para crear el proyecto primero debemos realizar un git clone, de la estructura de git dada para el desarrollo y la entrega del mismo, mas tarde al igual que la práctica anterior debemos seguir los pasos de la creacion de un proyecto para trabajar en TypeScript a partir del siguiente [enlace](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html). Ya creado el proyecto inicial, lo siguiente que vamos a crear es los ficheros y carpetas necesarios para poder elaborar la documentación de cada uno de los ejercicios, encontrandolos en este [video](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view). Después por último para ya tener la estructura de nuestro proyecto terminada, a través de mocha y chai, crearemos lo necesario para poder seguir la metodología TDD, en el que se desarrolla la prueba y luego el método, teniendolo disponible en este [video](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view). Para hacernos una idea de la estructura final del proyecto, debe ser algo parecido a lo siguiente:

![Ejercicio1Funcion](Imagenes/Estructura.JPG) 

### ELABORACIÓN DE LOS EJERCICIOS

### Ejercicio 1 - Decodificar resistencias

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-1.ts)

***Resumen enunciado*** 
 
Se nos pide crear una función llamada `decodeResistor` que deber recibir como parámetros los nombres de los colores de una resistencia, cada color representa un número, y lo que se espera que devuelva es un número de dos dígitos indicando el valor de la resistencia. Además en el caso que reciba más de dos colores deberá despreciar el resto de números, ya que solo se requieren dos dígitos. El número asociado a cada color es:

 - Negro: 0
 - Marrón: 1
 - Rojo: 2
 - Naranja: 3 
 - Amarillo: 4 
 - Verde: 5
 - Azul: 6
 - Violeta: 7
 - Gris: 8
 - Blanco: 9

***Captura y explicación de la función resuelta***
 
![Ejercicio1Funcion](Imagenes/Ejercicio1Funcion.JPG) 

Creamos la función que recibirá como parámetros un array de colores, dentro de ella creamos otro array donde estarán todos los colores en el orden del enunciado puesto que el número asociado coincide con la posición en la que se encuentra. Luego realizaremos un `forEach` que lo que hará es analizar cada alemento del array recibido y y siempre que su posición sea menor que 2, se realizará `colores.indexOf(i).toString()`, que lo que hará es obtener la posicion en la que se encuentra ese elemento, y se añadirá a una cadena, finalmente retornará esa cadena pasada a entero gracias a la función `parseInt`.

***Salida del programa***

![Ejercicio1Funcion](Imagenes/Ejercicio1Prueba.JPG) 

### Ejercicio 2 - Palabras encadenadas en un array

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-2.ts)

***Resumen enunciado*** 
 
La función `meshArray` recibirá un array que contiene cadenas de textos y lo que debe de hacer es comprobar si están encadenadas una palabra del array con la siguiente. Esta función podrá devolver:

 - “Error al encadenar" si las cadenas del array no están encadenadas.
 - Una cadena de texto que contenga las letras que encadenan las palabras del array. A priori no sabe cuantas letras encadenadas tendrán en común, pero al menos será una.

Algunos ejemplos son:

 1: [“allow”, “lowering”, “ringmaster”, “terror”] –> “lowringter”
 2: [“kingdom”, “dominator”, “notorious”, “usual”, “allegory”] –> “Error al encadenar”

***Captura y explicación de la función resuelta***
 
 ![Ejercicio1Funcion](Imagenes/Ejercicio2Funcion.JPG) 

***Salida del programa***

### Ejercicio 3 - Calcular la media y concatenar cadenas

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-3.ts)

***Resumen enunciado*** 
 
***Captura y explicación de la función resuelta***
 
 ![Ejercicio1Funcion](Imagenes/Ejercicio3Funcion.JPG) 

***Salida del programa***

### Ejercicio 4 - Mover los ceros al final

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-4.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***
 
 ![Ejercicio1Funcion](Imagenes/Ejercicio4Funcion.JPG) 

***Salida del programa***

### Ejercicio 5 - Factoría de multiplicaciones

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-5.ts)

***Resumen enunciado*** 
 
***Captura y explicación de la función resuelta***
 
 ![Ejercicio1Funcion](Imagenes/Ejercicio5Funcion.JPG) 

***Salida del programa***

### Ejercicio 6 - Puntos bi-dimensionales

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-6.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***
 
 ![Ejercicio1Funcion](Imagenes/Ejercicio6Funcion1sum.JPG) 
 ![Ejercicio1Funcion](Imagenes/Ejercicio6Funcion3.JPG) 
 ![Ejercicio1Funcion](Imagenes/Ejercicio6Funcion1.JPG) 
 ![Ejercicio1Funcion](Imagenes/Ejercicio6Funcion4.JPG) 


***Salida del programa***

### Ejercicio 7 - Puntos n-dimensionales

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-7.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***
 
 ![Ejercicio1Funcion](Imagenes/Ejercicio7Funcion1.JPG)
 ![Ejercicio1Funcion](Imagenes/Ejercicio7Funcion2.JPG) 
 ![Ejercicio1Funcion](Imagenes/Ejercicio7Funcion3.JPG) 
 ![Ejercicio1Funcion](Imagenes/Ejercicio7Funcion4.JPG) 


***Salida del programa***

### Ejercicio 8 - El agente

***Código resuelto*** = [Solución](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct04-arrays-tuples-enums-Espinette/blob/master/src/ejercicio-8.ts)

***Resumen enunciado*** 

***Captura y explicación de la función resuelta***
 
 ![Ejercicio1Funcion](Imagenes/Ejercicio8Funcion.JPG) 

***Salida del programa***

