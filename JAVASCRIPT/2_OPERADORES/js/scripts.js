// 1 - Number
console.log(typeof 2);
console.log(typeof 2.2);
console.log(typeof -4);

// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2)); binário
// console.log(num1.toFixed(2)); casas decimais, arredondamento
// console.log(Number.isInteger(num1));
// console.log(Number.isNaN(temp));
// let temp = num1 + '5';
// console.log(temp);

// 2 - Ops. aritméticas

console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

console.log(!!(100 / 0));

// let num2 = Math.floor(num1);
// let num2 = Math.ceil(num1);
// let num2 = Math.round(num1);
// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5);

// 3 - Special Numbers
console.log(typeof Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 - Strings
console.log("Um texto");
console.log(`Mais um texto`);

console.log(typeof "Opa");

//               012345678
let umaString = "Meu valor";

// length

// Caractere de escape \
console.log(umaString[4]);
console.log(umaString.charAt(-1)); // Retorna o valor da pos
console.log(umaString.charCodeAt(4)); // Retorna o código inteiro que repsetanta o valor na tabela asc
console.log(umaString.concat(" ", "ei", " ", "sister")); // raramente usado
console.log(umaString.indexOf("e", 0)); // Retorna o índice
console.log(umaString.indexOf("texto")); // Retorna o índice
console.log(umaString.indexOf(2)); // Retorna o índice
console.log(umaString.lastIndexOf("e", umaString.length)); // Retorna o índice
console.log(umaString.match(/[A-Za-z]+/g)); // Retorna um array com os valores encontrados (se g)
console.log(umaString.search(/[a-z]+/g)); // Retorna o índice da primeira ocorrência
console.log(umaString.replace(/e/g, "3"));
console.log(umaString.slice(2, 7));
console.log(umaString.slice(-3, -1));
console.log(umaString.split(" ", 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
console.log(`${umaString} em um lindo dia`);

// 5 - Símbolos especiais em string
console.log("Testando \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi, " + " tudo " + "bem?");

console.log(`Testando ` + `Concatenação`);

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa ${console.log("teste")}`);

// 8 - Booleans
console.log(5 > 2);

console.log(30 > 100);

console.log(typeof true);

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - op logico na prática
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(10 > 2 || 5 > 100);

console.log(!50 > 10);

// 12 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - mudança de tipos
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);
