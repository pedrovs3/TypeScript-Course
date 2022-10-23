/* eslint-disable */

// Tipos Basicos (Aqui ocorre inferencia de tipos)
let nome: string = 'Pedro';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer');
let bigInt: bigint = 10n;

// Arrays               tipoDoArray
let arrayNumbers: Array<number> = [1, 2];
let arrayNumbers2: number[] = [1, 2];
let arrayStrings: Array<string> = ['as', 'sada'];
let arrayStrings2: string[] = ['as', 'sada'];

// Objetos
let pessoa: { nome: string; idade: number };

// Funçoes
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

const result = soma(2, 2);

console.log(`${nome}, ${idade}, ${adulto}, ${bigInt}, `);
