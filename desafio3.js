const puntuacionesFrancia = [80, 95, 123]
const puntuacionesEspaña = [97, 112, 101]

function calcularMedia(puntuacionesPais) {
  let totalPuntuacion = 0
  for (let i = 0; i < puntuacionesPais.length; i++) {
    totalPuntuacion += puntuacionesPais[i]
  }
  const media = totalPuntuacion / puntuacionesPais.length
  console.log(media)
  return Number(media.toFixed(2))
}

function mostrarGanador() {
    
  const mediaFrancia = calcularMedia(puntuacionesFrancia)
  const mediaEspaña = calcularMedia(puntuacionesEspaña)

  if (mediaFrancia > mediaEspaña && mediaFrancia > 100) {
    console.log('Gana Francia')
  } else if (mediaEspaña > mediaFrancia && mediaEspaña > 100) {
    console.log('Gana España')
  } else if (mediaEspaña === mediaFrancia) {
    console.log('Empate')
  } else {
    console.log('No hay ganador la puntuación mínima es 100')
  }
}

mostrarGanador()