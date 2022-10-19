// 3 - Retorne o lanche mais vendido, mostrando apenas o nome e a quantidade do lanche mais vendido
// Para isso, escreva a query no arquivo desafio3.js
db.produtos.find({}, { nome: 1, vendidos: 1, _id: 0 }).sort({ age: 1 }).limit(1);