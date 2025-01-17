let pedro  = {
    peso: 70,
    altura: 1.80,
    imc: calcularIMC(this.peso, this.altura)
}

let lucas = {
    peso: 85,
    altura: 1.90,
    imc: calcularIMC(this.peso, this.altura)
}

let PedroMayorIMC = pedro.imc > lucas.imc;

console.log(PedroMayorIMC);

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}