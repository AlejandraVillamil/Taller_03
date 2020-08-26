var nombre
var apodo
var edad
var signo
//Creación de función generica
function pedirNombre(){
    nombre=prompt('Escribe tu nombre')
    //Diligenciar nombre
    var name_onscreen=document.getElementById('name_onscreen')
    name_onscreen.innerText = nombre
}

//Creación de función con evento de escucha 1
var btnApodo = document.querySelector('#btnApodo')
btnApodo.addEventListener('click',()=>{
    apodo=prompt('Escribe tu apodo')
        //Diligenciar apodo
        var nick_onscreen=document.getElementById('nick_onscreen')
        nick_onscreen.innerText = apodo
})

//Creación de función con evento de escucha 2
function pedirSigno(){
    signo=prompt('Escribe tu signo zodiacal')
       //Diligenciar Signo
   var zodiac_onscreen=document.getElementById('zodiac_onscreen')
   zodiac_onscreen.innerText = signo
}
btnSigno.addEventListener('click',pedirSigno)


//función tipo flecha
var pedirEdad =()=>{
    edad=prompt('Escribe tu Edad') 
    //Diligenciar Edad
   var age_onscreen=document.getElementById('age_onscreen')
   age_onscreen.innerText = edad

}
//función agupada
function askInfo(){
   var name=prompt('Escribe tu nombre')
   //Diligenciar nombre
   var name_onscreen=document.getElementById('name_onscreen')
   name_onscreen.innerText = name

   var nick=prompt('Escribe tu apodo')
   //Diligenciar apodo
   var nick_onscreen=document.getElementById('nick_onscreen')
   nick_onscreen.innerText = nick

   var zodiac=prompt('Escribe tu signo zodiacal')
   //Diligenciar Signo
   var zodiac_onscreen=document.getElementById('zodiac_onscreen')
   zodiac_onscreen.innerText = zodiac

   var age=prompt('Escribe tu Edad')  
   //Diligenciar Edad
   var age_onscreen=document.getElementById('age_onscreen')
   age_onscreen.innerText = age
   
   var message =`Mi nombre es ${name}, pero mi apodo es "${nick}" tengo ${age} años y mi signo zodiacal es ${zodiac}`
   
   alert(message)

}

function print(){
    alert('Bienvenid@ '+  nombre)
    document.write('Hola ' + nombre + ' bienvenid@! <br/>')
    var mensaje =`Mi nombre es ${nombre}, pero mi apodo es "${apodo}" tengo ${edad} años y mi signo zodiacal es ${signo}`
    document.write(mensaje)
    console.log(mensaje)
    alert(mensaje)


}



