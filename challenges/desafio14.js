// 14 - Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais
// Para isso, escreva a query no arquivo desafio14.js
// Sua query deve retornar apenas os campos nome, ingredientes e valoresNutricionais.

db.produtos.find({ ingredientes: { $in: ["picles"] } },
{ nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 }, _id: 0 });