///* Ejercicio 1 *///
var fullName = "Gonzalo Ramos"
var edad = 34
var valorPI = 3.1416
var alturaCM = 169
var escuelaPrimaria = "Niño Artillero"

console.log(escuelaPrimaria)

///* Ejercicio 2 *///
/* Tipos de datos 
fullName y escuelaPrimaria son strings
edad, valorPI y alturaCM son numbers
*/

///* Ejercicio 3 *///
// En una escuela hay 3 grupos cada uno tiene 20 alumnos, 
// para el festival de primavera se requieren 15 flores de papel china por cada alumno al día,
// y el festival tendrá una duración de 2 días. ¿Cuántas flores son necesarias?

var alumnosGrupoA = 20
var alumnosGrupoB = 20
var alumnosGrupoC = 20
var floresPorAlumno = 15
var festivalDías = 2
var totalFlores = ((alumnosGrupoA + alumnosGrupoB + alumnosGrupoC) * floresPorAlumno) * festivalDías
console.log(totalFlores)

///* Ejercicio 4 *///
// Define las siguientes variables, usando operaciones aritméticas:

// 1. La distancia entre los puntos (5,4) y (3,1) (d =√((x_2-x_1)2+(y_2-y_1)2) )



// 2. El área de un círculo con perímetro 3.6 (A = Π x r2)
// Fórmula para sacar el diámetro: Diámetro = Perímetro/Π

var perimetro = 3.6
var pi = 3.1416
var diametro = perimetro / pi
var radio = diametro / 2
var area = pi * radio ** 2

console.log(area)


// 3. La hipotenusa de un triángulo rectángulo cuyos catetos tienen de tamaño 4.3 y 5.9 (a2 + b2 = c2)



/////// EJERCICIOS DE IF - ELSE - SWITCH ///////

// Primero el IF - ELSE normalito 
var x = 2
if (x > 10) {
    x += 3;
} else if (x == 10) {
    x -= 2;   
} else x += 20;

console.log(x)

// Ahora vamos a ver cómo funciona SWITCH
var y = 2
switch (y) {
    case y > 10: y +=3; break; 
    case y == 10: y -= 2; break;
    default : y += 20;
}

console.log(y)

// Este es con operador ternario
// ? sería el IF y : sería el ELSE
var z = 7
z = z < 4 ? z += 2 : z -= 1;

console.log(z)


/////// EJERCICIOS DE FOR y WHILE ///////

var a // = prompt('Ingresa un número');
while (a > 0) {
    a -= 1;
    console.log(a)
}

var b //= prompt('Ingresa un número');
for (b > 0 ; b -= 1;) {
    console.log(b)
}

var c //= prompt('Ingresa un número')
for (let i = 0; i <= c; i ++){
    console.log(i)
}
