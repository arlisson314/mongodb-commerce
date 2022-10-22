// 28 - Conte quantos produtos têm 4 ingredientes
// Para isso, escreva a query no arquivo desafio28.js
db.produtos.count({ ingredientes: { $size: 4 } });