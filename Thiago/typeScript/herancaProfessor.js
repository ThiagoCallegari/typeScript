"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var herancaPessoa_1 = require("./herancaPessoa");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.getValorHora = function () {
        return this.valorHora;
    };
    Professor.prototype.setValorHora = function (_valorHora) {
        this.valorHora = _valorHora;
    };
    Professor.prototype.getNumHoras = function () {
        return this.numHoras;
    };
    Professor.prototype.setNumHoras = function (_NumHoras) {
        this.numHoras = _NumHoras;
    };
    Professor.prototype.getAreaDeFormacao = function () {
        return this.areaFormacao;
    };
    Professor.prototype.setAreaDeFormacao = function (_AreaDeFormacao) {
        this.areaFormacao = _AreaDeFormacao;
    };
    return Professor;
}(herancaPessoa_1.Pessoa));
exports.Professor = Professor;
