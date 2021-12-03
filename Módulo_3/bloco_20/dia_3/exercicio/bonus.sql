-- Escreva uma query para exibir todas as informações de todos os cientistas que 
-- possuam a letra e em seu nome.
SELECT * FROM Scientists.Scientists WHERE Name like '%e%';

-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A .
--  Ordene o resultado em ordem alfabética.

SELECT * FROM Scientists.Projects WHERE Name like 'a%';

-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o 
-- número 3 . Ordene o resultado em ordem alfabética.
SELECT * FROM Scientists.Projects WHERE Code like '%3%';

-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3 
-- , Ast3 ou Che1 .
SELECT count(*) FROM Scientists.Projects WHERE Code IN ('Ast3','Che1','AeH3');

-- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Scientists.Projects WHERE Hours > 500;

-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam
-- maiores que 250 e menores 800.

SELECT * FROM Scientists.Projects WHERE Hours BETWEEN 250 AND 800;
SELECT * FROM Scientists.Projects WHERE Hours > 250 AND Hours < 800;

-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H .
SELECT Name FROM Scientists.Projects WHERE Code LIKE '%H%'