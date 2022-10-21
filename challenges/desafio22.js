// 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana
// Para isso, escreva no arquivo desafio22.js quatro queries, nesta ordem:

// Crie uma query que inclua um campo vendasPorDia em todos os sanduíches. O valor deste campo deverá ser um array com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em 0. O array deve seguir a estrutura do exemplo abaixo:
// "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]

db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
db.produtos.updateOne({ tags: "bovino" }, { $inc: { "vendasPorDia.6": 120 } });
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });