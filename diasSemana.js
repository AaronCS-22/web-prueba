const diasSemana = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO']

//De forma automática
let dia = new Date().getDay()
let diaSemana = diasSemana[dia-1]
textoDia(diaSemana)
//De forma aleatoria
diaSemana = diasSemana[Math.floor(Math.random() * diasSemana.length)]
textoDia(diaSemana)


function textoDia(diaSemana) {
    switch (diaSemana) {
        case "LUNES":
            console.log('Primer día de la semana, complicado')
            break;
        case "MARTES":
        case "MIERCOLES":
            console.log('Día de trabajo')
            break;
        case "JUEVES":
            console.log('Nos vamos de juepincho')
            break;
        default:
            console.log('Estamos de fiesta o casi fiesta')
            break;
    }
}
    