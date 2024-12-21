import {barcelona,roma,paris,londres} from './ciudades.js'

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//Agregamos evento click

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
//REMOVER EL ACTIVO
        enlaces.forEach( function(enlace) {
            enlace.classList.remove('active')
        });
//AGREGAR LA CLASE "ACTIVE" AL ENLACE ACTUAL
    this.classList.add('active');
//OBTENER EL CONTENIDO CORRESPONDIENTE SEGUN EL ENLACE
    let contenido = obtenerContenido(this.textContent)
    
//MOSTRAR EL CONTENIDO EN EL DOM
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo

})
})

//Funcion para traer la info correcta desde ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona':barcelona,        
        'Roma':roma,        
        'París':paris,        
        'Londres':londres
    }
    return contenido[enlace];
}