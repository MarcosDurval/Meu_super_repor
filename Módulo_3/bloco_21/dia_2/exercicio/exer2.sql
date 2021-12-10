USE Pixar;
SELECT * FROM BoxOffice as b inner join Movies as m on b.movie_id = m.id AND b.international_sales > b.domestic_sales;