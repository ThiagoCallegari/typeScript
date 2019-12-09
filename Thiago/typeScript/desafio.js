"use strict";
exports.__esModule = true;
function mostrar(titulo, texto) {
    console.log("<html><head><title> .: T\u00EDtulo :. </title></head><body><h1> " + titulo + " </h1><p> " + texto + " </p></body></html>");
}
var teclado = require("readline-sync");
var titulo = teclado.question("Digite o titulo: ");
var texto = teclado.question("Digite a descricao: ");
mostrar(titulo, texto);
