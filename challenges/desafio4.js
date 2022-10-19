// 4 - Retorne os lanches que tiveram vendas maiores que 50 e menores que 100, mostrando apenas o nome e a quantidade de lanches vendidos em ordem crescent
db.produtos.find({ $and: [{ vendidos: { $gte: 50 } }, { vendidos: { $lte: 100 } }] },
  { nome: 1, vendidos: 1, _id: 0 }).sort({ vendidos: 1 });