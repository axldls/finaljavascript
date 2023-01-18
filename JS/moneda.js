class Monedas {
    constructor(nombre,valor) {
        this.nombre = nombre
        this.valor = valor
    }


conversorFinal() {
    debugger
    let monto =  parseInt(prompt("Ingrese ARS a Convertir:")) 
    return parseFloat((this.valor / monto).toFixed(2))
}

}


