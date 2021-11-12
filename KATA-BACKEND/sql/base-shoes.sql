DROP TABLE Colors;
DROP TABLE Shoes;

CREATE TABLE Colors (
  idColor SERIAL PRIMARY KEY,
  description VARCHAR
);

CREATE TABLE Shoes (
  idShoe SERIAL PRIMARY KEY,
  description VARCHAR,
  idColor INT,
  idModel INT,
  idType INT
);

ALTER TABLE Shoes ADD CONSTRAINT shoes_colors_fk
    FOREIGN KEY (idColor)
    REFERENCES Colors (idColor);