DROP DATABASE reserves;
CREATE DATABASE reserves;
USE reserves;

CREATE TABLE reservas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    location VARCHAR(255),
    image VARCHAR(1255),
    price DOUBLE
);

INSERT INTO reservas (id, location, image, price) VALUES
(1, 'Argentina','https://imgs.search.brave.com/pY-hPASrrs_zsaclJzC_JvxvcdjfFgIWMd7yYzNg-vU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8xLzFlL1B1/ZXJ0b19NYWRlcm8l/MkNfQnVlbm9zX0Fp/cmVzXyUyODQwNjg5/MjE5NzkyJTI5XyUy/OGNyb3BwZWQlMjku/anBnLzUxMnB4LVB1/ZXJ0b19NYWRlcm8l/MkNfQnVlbm9zX0Fp/cmVzXyUyODQwNjg5/MjE5NzkyJTI5XyUy/OGNyb3BwZWQlMjku/anBn', 150.00),
(2, 'RJ', 'https://imgs.search.brave.com/Gv_Ko1GwH1fzdNxO4wDORYVeI7vepmx1BvtgipKVUNc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk4L0Np/ZGFkZV9NYXJhdmls/aG9zYS5qcGcvNTEy/cHgtQ2lkYWRlX01h/cmF2aWxob3NhLmpw/Zw', 200.00),
(3, 'Londres', 'https://imgs.search.brave.com/twhHHFMy1kPlKKPmUWPDE25qgnOHqBcSgSdSQ7xW0ck/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi84LzhiL1dl/c3RtaW5zdGVyX0Fi/YmV5X1N0X1BldGVy/LmpwZy81MTJweC1X/ZXN0bWluc3Rlcl9B/YmJleV9TdF9QZXRl/ci5qcGc', 300.00),
(4, 'Paris', 'https://imgs.search.brave.com/U-XxHsZyXLu4XqmRkbuuXezHALdR4_jTNQyvJZKnGsQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E0L2M5/LzlkL2E0Yzk5ZGFi/N2M4OTIwNzA2MmUz/ODk3MzM1MDkxNWEw/LmpwZw', 350.00);

SELECT * FROM reservas;