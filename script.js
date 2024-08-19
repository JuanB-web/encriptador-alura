const textoEncriptador = document.getElementById("textoEncriptador");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const seccionDer = document.getElementById("seccionDer");
const ilustracion = document.getElementById("ilustracion");
const mensajeEncriptado = document.getElementById("mensajeEncriptado");
const tituloMensaje = document.getElementById("tituloMensaje");
const textoMensaje = document.getElementById("textoMensaje");
const botonCopiar = document.getElementById("botonCopiar");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const replace = (nuevoValor) => {
    mensajeEncriptado.classList.add("ajustar");
    ilustracion.classList.add("ocultar");
    tituloMensaje.innerHTML = nuevoValor;
    tituloMensaje.classList.add("ajuste");
    textoMensaje.style.display = "none";
    botonCopiar.style.display = "block";
    textoEncriptador.value = "";
};

const reset = () => {
    tituloMensaje.innerHTML = "";
    ilustracion.classList.remove("ocultar");
    textoMensaje.style.display = "block";
    botonCopiar.style.display = "none";
    mensajeEncriptado.classList.remove("ajustar");
    tituloMensaje.classList.remove("ajuste");
    textoEncriptador.focus();
};

botonEncriptar.addEventListener("click",() => {
    const texto = textoEncriptador.value.toLowerCase()
    if(texto !== ""){
        function encriptar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])
                };
            };
            return newText;
        }
    } else {
        alert("Ingrese texto para encriptar");
        reset();
    }
    replace(encriptar(texto));
});

botonDesencriptar.addEventListener("click", () => {
    const texto = textoEncriptador.value.toLowerCase();
    if(texto !=="") {
        function desencriptar(newText) {
            for (let i = 0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][1])){
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0])
                };
            };
            return newText;
        };
    } else {
        alert("Ingrese texto para desencriptar")
        reset();
    }
    
    replace(desencriptar(texto));
});

botonCopiar.addEventListener("click", () => {
    let texto = tituloMensaje;
    texto.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles!");
    reset();
});