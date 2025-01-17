console.log("Hola mundo");

let total = 0;
for (let i = 1; i <= 100; i++){
    total += i;
};

console.log(total);
console.log("Segundo texto");
console.log(2+2);

let alumno = {
    nombre: "Aaron",
    edad:25,
    estaCasado: false
};

console.log(alumno.nombre, " tiene ", alumno.edad, " y esta casado: ", alumno.estaCasado); // Muestra las variables en azul
console.log(alumno.nombre + " tiene " + alumno.edad + " y esta casado: " + alumno.estaCasado); // Muestra las variables como si fuera del propio texto
console.log(`${alumno.nombre} tiene ${alumno.edad} años`);