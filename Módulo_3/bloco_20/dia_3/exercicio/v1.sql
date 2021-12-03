-- Escreva uma query para exibir todas as peças que começam com GR .

SELECT * FROM PecasFornecedores.Pecas AS p WHERE p.name like 'GR%' ;

-- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 .
-- Organize o resultado por ordem alfabética de fornecedor.

SELECT 
    *
FROM
    PecasFornecedores.Fornecimentos AS F
WHERE
    F.peca = 2
ORDER BY F.Fornecedor;

-- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em
-- que o código do fornecedor tenha a letra N .

SELECT * FROM PecasFornecedores.Fornecimentos AS F WHERE F.Fornecedor LIKE '%N%';

-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas
-- limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.

SELECT * FROM PecasFornecedores.Fornecedores AS F WHERE F.name like'%LTDA%' ORDER BY F.name DESC;

-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no
-- código.
SELECT 
    (COUNT(*)) AS 'Numero_de_Fornecedores'
FROM
    PecasFornecedores.Fornecedores AS F
WHERE
    F.code LIKE '%F%';

-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 .
-- Ordene os resultados por ordem crescente

SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 15 and 40 ORDER BY Preco;

-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .


SELECT * FROM PecasFornecedores.Vendas AS V WHERE V.order_date BETWEEN '2018-04-15' AND '2019-07-30';