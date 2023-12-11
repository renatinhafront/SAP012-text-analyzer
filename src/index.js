//preparação do ambiente do teste - é onde fazemos as implantações necessárias
import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//ESTUDO
//descreveno o segmento a ser testado
        // implementar os teste especificos 

describe('Testes sobre a função de soma', () => {
    it('deve retornar um número positivo quando forem somados dois números positivos', () => {
        let n1 = 3
        let n2 = 4
        const resp = 7

        expect(somar(n1,n2)).toBeEqual(resp)
    }) 
}); //arrow function
describe('Testes sobre a função de subtração');
describe('Testes sobre a função de multiplicação')
