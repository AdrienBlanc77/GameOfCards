DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS users;

-- Création des Tables
CREATE TABLE cards (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "card_name" TEXT,
    "pv" INT,
    "attack" INT,
    "mana" INT
);

CREATE TABLE users (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_name" TEXT,
    "user_pwd" TEXT,
    "user_role" TEXT
);

-- Insertion dans les tables
INSERT INTO users (user_name, user_pwd, user_role)
VALUES ('admin', 'admin', 'admin');


INSERT INTO cards (card_name, pv, attack, mana)
VALUES
    ('Adrien le BG', 10, 10, 10),
    ('Francois Jediv', 10, 10, 4),
    ('Padaspan Wiwi', 1, 1, 1),
    ('Benjamin Nougadere', 1, 8, 4),
    ('Adrien au reveil', 1, 1, 0),
    ('Ton niveau en code', 20, 1, 8),
    ('Abdelkarim GOD', 100, 100, 12),
    ('Maya l''abeille', 1, 60, 5),
    ('O''clock Master', 15, 15, 8),
    ('Flore l''actrice', 12, 8, 4),
    ('Amaury le pillier', 7, 20, 6);