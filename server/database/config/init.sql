BEGIN;
DROP TABLE IF EXISTS users,
tasks cascade;
CREATE TABLE users(
    id serial PRIMARY KEY,
    user_name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL
);
CREATE TABLE tasks(
    id serial PRIMARY KEY,
    user_id integer references users(id),
    task varchar(255) NOT NULL
);
INSERT INTO USERS
VALUES (1, 'BEKO', 'dbakeza2002@gmail.com', '123');
INSERT INTO USERS
VALUES (2, 'BEKO222', 'bekooooooo@gmail.com', '123');
INSERT INTO tasks
VALUES (1, 1, 'ASK1');
INSERT INTO tasks
VALUES (2, 1, 'TASK2');
INSERT INTO tasks
VALUES (3, 2, 'TASK3');
COMMIT;