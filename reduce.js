/*
    * Exemplo:
    - Some todos os valores do array  "values";
    - Atribua esse valores à uma variável;
    - Exiba os valores dessa variável no console;
 */

const values = [20, 2, 15, 18, 5, 53, 16];

sumValues = values.reduce((accumulation, value) => accumulation + value);
console.log(sumValues);