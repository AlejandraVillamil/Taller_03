/*var boton = document.getElementById('btn')
console.log("Este es un boton",boton) //concatenar texto con coma
console.log(`Este es un boton${boton}`)//concatenar texto con templates
*/

var nombre
var apodo
var edad
var signo
//Creación de función generica
function pedirNombre(){
    nombre=prompt('Escribe tu nombre')
}

//Creación de función con evento de escucha 1
var btnApodo = document.querySelector('#btnApodo')
btnApodo.addEventListener('click',()=>{
    apodo=prompt('Escribe tu apodo')
})

//Creación de función con evento de escucha 2
function pedirSigno(){
    signo=prompt('Escribe tu signo zodiacal')
}
btnSigno.addEventListener('click',pedirSigno)


//función tipo flecha
var pedirEdad =()=>{
    edad=prompt('Escribe tu Edad')  
    print()
}
//función agupada
function askInfo(){
   var name=prompt('Escribe tu nombre')
   var nick=prompt('Escribe tu apodo')
   var zodiac=prompt('Escribe tu signo zodiacal')
   var age=prompt('Escribe tu Edad')  
   var message =`Mi nombre es ${name}, pero mi apodo es "${nick}" tengo ${age} años y mi signo zodiacal es ${zodiac}`
    document.write(message)

}

function print(){
    alert('Bienvenid@ '+  nombre)
    document.write('Hola ' + nombre + ' bienvenid@! <br/>')
    var mensaje =`Mi nombre es ${nombre}, pero mi apodo es "${apodo}" tengo ${edad} años y mi signo zodiacal es ${signo}`
    document.write(mensaje)
    console.log(mensaje)
    alert(mensaje)
}



