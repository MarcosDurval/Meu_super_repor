USE Pixar;

SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
     WHERE b.domestic_sales < b.international_sales;