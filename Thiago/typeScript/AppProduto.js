"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var p1;
var p2;
p1 = new Produto_1.Produto(1, "Garrafa Termica", "Azul, 500ml", 20.00, 15, "c/Thiago/img/foto.jpeg");
p2 = new Produto_1.Produto(2, "Caneca", "Preto, 100ml", 10.00, 70, "c/Thiago/img/caneca.jpeg");
p1.exibir2();
p2.exibir2();
console.log(p1);
console.log(p2); // Saída de texto padrão é em formato JSON
