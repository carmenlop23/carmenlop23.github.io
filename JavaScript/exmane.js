let frase= document.getElementById("Como te pasas, menudo examen")
let boton=document.getElementById ("Boton")
let e=3
let i=1
let o= 0

// FUNCIONES 
function mayusAleatoria(max) {
    return Math.floor(Math.random() * max)
}

function cambiaVocales(frase) {
    let nuevaFrase=""
    for (let i=0; i.lenght; i++)  {
        console.log(frase[i])

        if(frase[i] === "a") // Son dos == --> Es Verdadero // === --> Es Falso
           nuevaFrase="4"

        else if (frase[i] === "e")
           nuevaFrase="3"

        else if (frase[i] === "i")
           nuevaFrase="1"

        else if (frase[i] === "o")
           nuevaFrase="0"

        else if (frase[2] === "1")
           nuevaFrase+=frase[i]

        else 
           nuevaFrase+=frase[i],toUpperCase()
    }
    return nuevaFrase

}

 // EVENTOS 
   // Valor de la caja
boton.addEventListener("click",(e) => {
    let texto=cambiaVocales(frase.value)
    console.log("Hola")
    resultado.innerHTML=texto  // Hacemos que el valor de la caja aparezca abajo
}
)

// con el objeto y el atributo puedes recuperar partes de un input:    frase.type  / frase.value

 // main



