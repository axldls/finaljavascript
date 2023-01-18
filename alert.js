const faltanCargarDatos = ()=> {
    return (isNaN(parseInt(inputNombre.value)) || inputValor.value.trim() == "" )
}

const datosF = (mensaje, bgColor, tiempo)=> {
    Swal.fire({
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        toast: true,
        timer: tiempo || 3000,
        timerProgressBar: true,
        background: bgColor || 'white',
        color: '#ffffff'
    })
}

const datosFalse = ()=> {
    faltanCargarDatos() ? datosF("Complete todos los datos solicitados a convertir.", 'darkred') : agregarMoneda()
}

