const Alumno1 = {
    nombre: 'Pepe',
    edad: 35,
    estáCasado: true
}

const Alumno2 = {
    nombre: 'Berta',
    edad: 27,
    estáCasado: false
}

const Alumno = Alumno2

for (let i = 0; i < 3; i++) {
    mostrarDatos(Alumno);
}
mostrarDatos(Alumno);

function mostrarDatos(alumno) {
    console.log(`Datos de ${alumno.nombre}:
    Edad ${alumno.edad}
    Casado: ${alumno.estáCasado ? 'Sí' : 'No'}`);
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}