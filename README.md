Request A:
mysql> SELECT
    ->     c.title,
    ->     cat.category_name
    -> FROM content c
    -> JOIN category cat
    ->     ON c.category_id = cat.category_id
    -> WHERE cat.category_name = 'Documentaries'
    ->   AND c.release_year = 2024
    ->   AND c.rating > 8.0;

  <img width="898" height="227" alt="image" src="https://github.com/user-attachments/assets/ec39d28d-e5cb-4836-a182-5cf10ad98e81" />

Request B:
mysql> SELECT
    ->     title,
    ->     (rating + views_in_millions) AS success_score
    -> FROM content
    -> WHERE (rating + views_in_millions) > 100;

  <img width="1124" height="394" alt="image" src="https://github.com/user-attachments/assets/2ca1ef53-9c2f-40aa-801c-2cb0b102a90c" />


