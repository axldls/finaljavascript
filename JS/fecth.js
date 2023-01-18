document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('valor.json')
    .then (function(res){
    return res.json();        
    })
    .then(function(data){
     let html = '';
     data.forEach(function(valor){
        html += `
        <li>${valor.titulo} ${valor.valor}</li>
        `;
     })

     document.getElementById('resultado').innerHTML = html;
    })
}