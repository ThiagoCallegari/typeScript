function calculaAno(...anos: number[]): boolean {

    let resultado = true;

    for (let i = 0; i < anos.length; i++) {
        if (anos[i] % 4 != 0) {
            resultado = false;
        }
        else if (anos[i] % 4 == 0 && anos[i] % 100 == 0 && anos[i] % 400 == 0) {
            resultado = true;
        }
        else if (anos[i] % 4 == 0 && anos[i] % 100 != 0) {
            resultado = true;
        }
        else {
            resultado = false;
        }
    }

    return resultado;
}

console.log(calculaAno(1800));