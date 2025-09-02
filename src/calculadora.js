function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){
    //1. Soma todos os valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    //2. Divide pela quantiadade de números passado
    const resultadoDaMediaDeDoisValores = resultadoSomaDeDoisValores / 2;
    //3. Retornar o resultado
    return resultadoDaMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros  //coloco as funções que quero exportar para outro file (uma abaixo da outra)
}