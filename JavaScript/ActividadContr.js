// 4. GENERADOR DE CONTRASEÑAS SEGURAS 

   // - Definimos los caracteres que vamos a usar
       let caracteres = "abcdefghijklmnopqrstuvwxyz"
       let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       let caracteresNumeros = "0123456789"
       let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./"


function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}


let contarCaracteres = 10

if (contarCaracteres < 8){
    contarCaracteres = 8
}
if (contarCaracteres > 50){
    contarCaracteres= 50
}


let contr = ""

let posicion = numeroAleatorio(0,mayusculas.length-1)
contr = contr + mayusculas[pos]

let numeros = numeroAleatorio(1,2)
for(let i=0;i<numeros;i++){
    let posicionNumeros = numeroAleatorio(0,numeros.length-1)
    contr = contr+ numeros[posicionNumeros]
}

let especiales = numeroAleatorio(1,2)
for(let i=0;i<especiales;i++){
    let posiscionEspeciales = numeroAleatorio(0,especiales.length-1)
    contr= contr + especiales[posicionEspeciales]
}

for(let i=contr.length;i<longitud;i++){
    let posicionLetras = numeroAleatorio(0,caracteres.length-1)
    contr =contr + caracteres[posicionLetras]
}

contr = contr.split('').sort(()=>Math.random()-0.5).join('')

console.log(password)