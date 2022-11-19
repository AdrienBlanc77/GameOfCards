DROP TABLE IF EXISTS cards;

CREATE TABLE cards (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "card_name" TEXT,
    "pv" INT,
    "attack" INT,
    "mana" INT
);

INSERT INTO cards (card_name, pv, attack, mana)
VALUES
    ('Adrien le BG', 10, 10, 10),
    ('Francois Jediv', 10, 10, 4),
    ('Padaspan Wiwi', 1, 1, 1),
    ('Benjamin Nougadere', 0, 8, 4),
    ('Adrien au reveil', 0, 1, 0),
    ('Ton niveau en code', 20, 1, 8),
    ('Abdelkarim GOD', 100, 100, 12),
    ('Maya l''abeille', 0, 60, 5),
    ('O''clock Master', 15, 15, 8),
    ('Flore l''actrice', 12, 8, 4),
    ('Amaury le pillier', 7, 20, 6);