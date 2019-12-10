"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        this.placa = _placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (_cor) {
        this.placa = _cor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (_ano) {
        if (_ano < 1900 || _ano > 2100) {
            console.log("Digite um ano válido!");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.setLigado = function (_ligado) {
        this.ligado = _ligado;
    };
    Carro.prototype.andar = function () {
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " esta andando...");
        }
        else {
            console.log("Você deve ligar o carro primeiro!");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar");
        }
        else {
            console.log("O carro deve estar ligado para poder parar!");
        }
    };
    Carro.prototype.ligar = function () {
        if (this.ligado == false) {
            this.ligado = true;
            console.log("O carro esta ligado");
        }
        else {
            console.log("O carro ja esta ligado");
        }
    };
    Carro.prototype.desligar = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log("O carro esta desligado");
        }
        else {
            console.log("O carro ja esta desligado");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
