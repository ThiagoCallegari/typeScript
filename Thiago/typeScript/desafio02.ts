function valores(... parametros: string[]) : string { //gera divs com número de parâmetros indefinidos
    
    let txt:string = "";

    for (let i=0; i<parametros.length; i++) {
        txt += `<div id="id${i+1}"> ${parametros[i]} </div>\n`; // com expression language
    }
    
    return txt;
}

console.log(valores("primeiro", "segundo", "terceiro"));
