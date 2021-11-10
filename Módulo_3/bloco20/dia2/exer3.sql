USE Pixar;
SELECT 
    m.title, b.rating
FROM
    Movies AS m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8;