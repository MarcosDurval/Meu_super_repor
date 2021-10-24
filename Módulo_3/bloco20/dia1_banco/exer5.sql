SELECT
  round(Max(SALARY),2) AS MAXIMO,
  round(Min(SALARY),2) AS MINIMO, 
  round(SUM(SALARY),2) SOMA_TODOS, 
  round(AVG(SALARY),2) AS Media 
from hr.employees;