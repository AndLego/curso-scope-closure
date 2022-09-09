"Closure";
/* 
Un closure permite acceder al scope de una función exterior desde una 
función interior. En JavaScript, los closures se crean cada vez que una 
función se genera. A diferencia de otros conceptos como funciones, 
variables u otros, los closures no se utilizan todas las veces.
*/

"Que es el Scope??";

// El alcance que termina la accesibilidad de las variables

"Global - scope";
/*
 Cuando una variable esta declarada fuera de una funcion o bloque, queda en el ambito
 globalThis. Lo que permite que pueda ser accedida desde cualquier parte del codigo.
 Existe la posibilidad de que la declaremos dos veces sin notarlo, por lo que no se
 recomienda su uso como buena practica.*/

"Local Scope o Function - scope";
/*
 Al declarar variables dentro de una funcion estas solo podran ser utilizadas
  dentro de la misma, si se trata de invocar desde afuera la consola marcara un
  error y aplica solo al usar let o const.*/

"Block - scope";
/*
El scope local de bloque es el entorno donde las variables locales únicamente pueden
ser accedidas desde un bloque de código del programa. Un bloque de código es todo
aquello que está dentro de los caracteres de llaves {}*/

"Strict Mode";
/*
El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera 
en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno 
porque permite manejar errores que son poco perceptibles o que el motor de JavaScript 
sobreentiende y ayuda a su compilación para corregirlos.

Este en el código colocando en la primera línea */ "use strict"; /*para todo el archivo. 
También puede utilizarse en la primera línea de una función, pero no para un bloque en 
específico. */
