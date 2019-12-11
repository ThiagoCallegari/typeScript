"use strict";
/*
  codigo   : number
  nome     : string
  detalhes : string
  preco    : number
  estoque  : number
  linkFoto : string
*/
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(_co, _no, _de, _pr, _es, _li) {
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFoto = _li;
    }
    Produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    Produto.prototype.setCodigo = function (_co) {
        this.codigo = _co;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (_no) {
        this.nome = _no;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (_de) {
        this.nome = _de;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (_pr) {
        this.preco = _pr;
    };
    Produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    Produto.prototype.setEstoque = function (_es) {
        this.estoque = _es;
    };
    Produto.prototype.getLinkFoto = function () {
        return this.linkFoto;
    };
    Produto.prototype.setLinkFoto = function (_li) {
        this.linkFoto = _li;
    };
    Produto.prototype.exibir = function () {
        console.log("Codigo: " + this.codigo + " / Nome: " + this.nome + " / Detalhes: " + this.detalhes + " / Preco: " + this.preco + " / Estoque: " + this.estoque + " / Link Foto: " + this.linkFoto);
    };
    Produto.prototype.exibir2 = function () {
        console.log("\n Codigo: " + this.getCodigo() + "\n / Nome: " + this.getNome() + "\n / Detalhes: " + this.getDetalhes() + "\n / Preco: " + this.getPreco() + "\n / Estoque: " + this.getEstoque() + "\n / Link Foto: " + this.getLinkFoto() + "\n");
    };
    return Produto;
}());
exports.Produto = Produto;
