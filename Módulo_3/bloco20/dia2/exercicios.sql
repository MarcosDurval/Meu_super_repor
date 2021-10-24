SELECT data_actor.actor_id, data_actor.first_name, data_actor.last_name, name_Film.film_id 
FROM sakila.actor as data_actor
INNER JOIN sakila.film_actor as name_Film
ON data_actor.actor_id = name_Film.actor_id;

SELECT t1.first_name, t1.last_name, t2.address 
from sakila.staff as t1
INNER JOIN sakila.address t2
ON t1.address_id = t2.address_id;

SELECT t1.customer_id, t1.first_name, t1.email, t2.address
FROM sakila.customer t1
INNER JOIN sakila.address t2
ON t1.address_id = t2.address_id
ORDER BY t1.first_name DESC LIMIT 100;