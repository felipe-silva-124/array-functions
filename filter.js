/*
    * Exemplo:
    - Filtre todos os valores numéricos maiores que 10;
    - Atribua esse valores à um novo array;
    - Exiba os valores desse novo array no console;
 */

const values = [20, 2, 15, 18, 5, 53, 16];

const filteredValues = values.filter((value) => value > 10);
console.log(filteredValues);
