const { somarDoisNumeros } = require('../src/calculadora'); //sair da pasta tests, entrar na pasta src e pegar 'calculadora' - Importa a função somarDoisNumeros para poder testar ela
const { expect } = require('chai'); //Importa a função expect do chai para comparar

describe('Testes da Função de Soma', function() { //Describe é um grupo de testes
    it('A função deve ser capaz de somar dois números positivos', function(){ //It é um teste
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3); //Dentro de cada { } só posso ter uma const

        //Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function(){
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        expect(resultadoDaSoma).to.equal(35);
    });
});