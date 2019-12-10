export class Carro { // export torna a classe pública

    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private ligado: boolean;

    public getPlaca() : string {
        return this.placa;
    }
    public setPlaca(_placa : string) : void {
        this.placa = _placa;
    }

    public getCor() : string {
        return this.cor;
    }
    public setCor(_cor : string) : void {
        this.placa = _cor;
    }

    public getModelo() : string {
        return this.modelo;
    }
    public setModelo(_modelo : string) : void {
        this.modelo = _modelo;
    }

    public getAno() : number {
        return this.ano;
    }
    public setAno(_ano : number) : void {
        
        if (_ano < 1900 || _ano > 2100) {
            console.log("Digite um ano válido!");
        }
        else {
            this.ano = _ano;
        }
    }

    public getLigado() : boolean {
        return this.ligado;
    }
    public setLigado(_ligado : boolean) : void {
        this.ligado = _ligado;
    }

    public andar(): void {

        if (this.ligado) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " esta andando...");
        }
        else {
            console.log("Você deve ligar o carro primeiro!");
        }
    }

    public parar(): void {

        if (this.ligado) {
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar`);
        }
        else {
            console.log("O carro deve estar ligado para poder parar!");
        }
    }

    public ligar(): void {

        if (this.ligado == false) {
            this.ligado = true;
            console.log("O carro esta ligado")
        }
        else {
            console.log("O carro ja esta ligado");
        }
    }

    public desligar(): void {

        if (this.ligado) {
            this.ligado = false;
            console.log("O carro esta desligado")
        }
        else {
            console.log("O carro ja esta desligado");
        }
    }
}