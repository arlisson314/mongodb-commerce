// 27 - Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas
// Para isso, escreva a query no arquivo desafio27.js

db.produtos.countDocuments({ nome: { $regex: /Mc/i } });