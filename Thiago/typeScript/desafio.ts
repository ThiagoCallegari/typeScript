function mostrar(titulo:string, texto:string) {
console.log(`<html><head><title> .: Título :. </title></head><body><h1> ${titulo} </h1><p> ${texto} </p></body></html>`);
}

import teclado = require("readline-sync");

let titulo:string = teclado.question("Digite o titulo: ");
let texto:string = teclado.question("Digite a descricao: ");

mostrar(titulo, texto);


