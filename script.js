const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
const empty = document.querySelector(".empty");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnCopiar(){
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
     mensaje.value = textoEncriptado
     textArea.value = ""; //Borra el texto anterior
     mensaje.style.backgroundImage = "none";
    ocultar();
    mostrar();
 }

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function ocultar(){
    empty.style.display = 'none';

}

function mostrar(){
    copiar.style.display = 'flex';
}

const lettersRegex = /^[a-z\s-ñ]*$/;
textArea.oninput = function(){
    if (!lettersRegex.test(textArea.value)){
        textArea.value = textArea.value.replace(/[^a-z\s]/g, "");
        alert("Recuerda, sólo letras minusculas y sin acento");
    }
}
