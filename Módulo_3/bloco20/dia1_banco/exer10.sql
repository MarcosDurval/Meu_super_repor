SELECT COUNT(*) as Numero_fun FROM hr.employees
GROUP BY DEPARTMENT_ID
Having Numero_fun > 10;
