function agregarMoneda(){
    debugger
    let moneda = prompt("Ingrese Nueva Moneda:")
    let precio = prompt("Ingrese Valor de Nueva Moneda:")
    Moneda.push(new Monedas(moneda, precio))
}


document.addEventListener("submit", (e)=>{
    e.preventDefault()
    agregarMonedaNueva()
    }

)

document.getElementById("botonN2").onclick = ()=>{
    agregarMonedaNueva()
}

function agregarMonedaNueva() {
    const monedaNueva = {
                        nombre: inputNombre.value,
                        costo: inputValor.value  
}
let str =JSON.stringify(monedaNueva)
localStorage.setItem("monedaNueva",  str)
 }

 function recuperoMonedaGuardada() {
    if (localStorage.getItem("monedaNueva")){
        const monedaNueva = JSON.parse(localStorage.getItem("monedaNueva"))
        inputNombre.value = monedaNueva.nombre
        inputValor.value = monedaNueva.costo
    }
 }