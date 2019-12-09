function valores() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var txt = "";
    for (var i = 0; i < parametros.length; i++) {
        txt += "<div id=\"id" + (i + 1) + "\"> " + parametros[i] + " </div>\n";
    }
    return txt;
}
console.log(valores("primeiro", "segundo", "terceiro"));
