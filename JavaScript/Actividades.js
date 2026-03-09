
// UD 6.1 Tareas


// 1. HACER UN DADO DE 6 CARAS CON X FUNCIÓN 
function numeroAleatorio () {
    let num= Math.floor(Math.random() * max) + 1
    return num
    
}
let num =numeroAleatorio(12)
console.log(num)

/* OTRA OPCION DEL CUADRADO 
function numeroAleatorio () {
    let max=6
    let numero= Math.floor(Math.random() * max) + 1;
    console.log(numero)  
}
numeroAleatorio(12)
numeroAleatorio(45)
numeroAleatorio(500)
numeroAleatorio(2)
//console.log(numero)

 */


/* ###################################################################################################### */ 


// 2.  JUEGO PRIMITIVA 
function numeroAleatorio(max) {
    let numero= Math.floor(Math.random() * max) + 1
    return numero
}

let numero =0

let num1=[]

while(num1.length<6) {
    numero = numeroAleatorio(49)
 if(num1.indexOf(numero)>-1) {
    console.log("ya estaba en la lista: " + numero)
 }
    else 
        num1.push(numero)
    
// console.log(solucion);
}


/* ###################################################################################################### */ 



// 3. MÉTODO CESAR (Array) EJEMPLO ALFABETO 
/*
let 
alfabeto = "abcdefghyjklmnopqrstuvwxyz"
console.log(alfabeto[8])
*/


// CUANTAS POSICIONES VOY A UTILIZAR PARA CAMBIAR LA FRASE let 
let alfabeto = "abcdefghyjklmnopqrstuvwxyz"
let frase = "zanahoria"
let paso =3
let fraseCifrada=""
// let numeros= int("1245")


for (let i=0; i<frase.length; i++) {  // Dentro del for ponemos la cadena que queremos recorrer

     let posicion = (alfabeto.indexOf(frase[i] + paso) % alfabeto.length)


     let letraCifrada= alfabeto[posicion]fraseCifrada                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      = fraseCifrada + letraCifrada

}
console.log(fraseCifrada)




// 4. GENERADOR DE CONTRASEÑAS SEGURAS 

   // - Definimos los caracteres que vamos a usar
       let caracteres = "abcdefghijklmnopqrstuvwxyz"
       let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       let caracteresNumeros = "0123456789"
       let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./"
       let nume
       
         for(let i=8; i<50;i++) {
             if(num>=1)
}


// 5. 



