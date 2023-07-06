function desinfectarTexto(texto, primerCaracter, segundoCaracter) {
  let textoDesinfectado = '';
  let i = 0;
  
  while (i < texto.length) {
    if (texto[i] == primerCaracter && texto[i+1] == primerCaracter) {
      textoDesinfectado += primerCaracter + segundoCaracter;
      i += 2;
    } else {
      textoDesinfectado += texto[i];
      i++;
    }
  }
  
  return textoDesinfectado;
}

let archivoInfectado = prompt("Ingrese el archivo infectado");
let caracteresElegidos = prompt("Ingrese los caracteres elegidos");
let primerCaracter = caracteresElegidos[0];
let segundoCaracter = caracteresElegidos[1];

let textoDesinfectado = desinfectarTexto(archivoInfectado, primerCaracter, segundoCaracter);

document.write("Texto desinfectado: " + textoDesinfectado);
