import {Pessoa} from "./herancaPessoa";

export class Professor extends Pessoa {

    private valorHora: number;
    private numHoras: number;
    private areaFormacao: string;

    public getValorHora(): number {
        return this.valorHora; 
    }

    public setValorHora(_valorHora: number): void {
        this.valorHora = _valorHora;
    }

    public getNumHoras(): number {
        return this.numHoras;
    }

    public setNumHoras(_NumHoras: number): void {
        this.numHoras = _NumHoras;
    }

    public getAreaDeFormacao(): string {
        return this.areaFormacao;
    }

    public setAreaDeFormacao(_AreaDeFormacao: string): void {
        this.areaFormacao = _AreaDeFormacao;
    }
}