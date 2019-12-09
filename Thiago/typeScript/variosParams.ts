function minhaFuncao (x:number,y:number = 7) {
    console.log(x);
    console.log(y);
}

function somaVarios(... parametros: number[]) : number {
    let result:number = 0;
    for (let i = 0; i<parametros.length; i++) {
        result+=parametros[i];
    }
    return result;
}

console.log(somaVarios());
console.log(somaVarios(10));
console.log(somaVarios(10,15,20,30));