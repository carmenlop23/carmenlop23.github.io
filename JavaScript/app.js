
// Leer la clase number y mostrarlo en pantalla. (indexPruebaBoton.html) 


// -------- Primero hacemos las variables--------
let num1=document.getElementById("numero1")
let num2=document.getElementById("numero2")
let boton=document.getElementById("run")
let salida=document.getElementById("salida")
let borrar1=null
let indice=0





// -------- Segundo hacemos los eventos -------- 
     //Lo que hay entre las llaves {} es lo que se ejecuta
    // Entre comillas ponemos que evento va a ejecutar. 
   //  click -> se guarda en una variable quien realiza la accion  

boton.addEventListener("click", (event)=>{ 
      indice ++

let texto=""
texto+='<input type= "button" value="Borrar" id=$(indice)> ' + num1.value + "<br>"
// id=$(indice) -> Es como una variable 

    salida.innerHTML=salida.innerHTML+texto // existe el boton y cuando existe el html 

// Apunto al id 
// Me guardo una variable y una vez me la guarde apunto el boton y una vez apuntado el boton :
borrar1=document.getElementById(indice) // Guardo el boton en una variable elemento 

borrar1.addEventListener("click", (ev) => { //Guardo un evento sobre el boton 

 // Generto un evento sobre el boton 

    console.log("Aqui")
    alert("SOy yo:")

}) 

})

  

                       







/*
// -------- Tercero hacemos el main (PARA APARECER EN PANTALLA sysout) --------
console.log(num1.ariaValueMax)
console.log(num2.ariaValueMax)
console.log(boton.id)
*/






/* ###################################################################################################### */ 