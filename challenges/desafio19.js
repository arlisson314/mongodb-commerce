// 19 - Remova o item cebola de todos os sanduíches
// Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do item cebola em todos os sanduíches.

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.updateMany({},
  { $pull: { ingredientes: { $in: ["cebola"] } } });
  
  db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });