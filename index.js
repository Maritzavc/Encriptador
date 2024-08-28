function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
  
    let textoCifrado = texto
      .replace(/e/gi, "mas")
      .replace(/i/gi, "cor")
      .replace(/a/gi, "men")
      .replace(/o/gi, "bye")
      .replace(/u/gi, "god");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      imagen.src = "./imagenes/encriptado.jpg";
    } else {
      imagen.src = "./imagenes/imagen.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");
  
    let textoCifrado = texto
      .replace(/mas/gi, "e")
      .replace(/cor/gi, "i")
      .replace(/men/gi, "a")
      .replace(/bye/gi, "o")
      .replace(/god/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "./imagenes/desencriptado.jpg";
      } else {
        imagen.src = "./imagenes/imagen.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  }