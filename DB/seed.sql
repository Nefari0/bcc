-- LIST OF TABLES:
-- products
-- site_user
-- orders
-- cart_item

DROP TABLE products
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(250),
  product_description VARCHAR(250),
  price FLOAT,
  category VARCHAR(250),
  photo_url VARCHAR(250)
);

INSERT INTO products (name,product_description,price,category,photo_url)
VALUES (
    'dummy item',
    'ititial/test data for product table',
    9.99,
    'Pastries',
    'http://www.theholidayspot.com/easter/treasure_hunt/images/treasure-chest.png'
);

CREATE TABLE site_user (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(100),
    email VARCHAR(100)
    phone DECIMAL(10)
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    hash text
    is_admin BOOLEAN
);
-- main user user_id:34, email:c@cmont.com, password:pass

INSERT INTO site_user (user_name,first_name,last_name,email,is_admin,hash)
VALUES (
    'cdawg',
    'Chris',
    'deMontigny',
    'cd@email.com',
    true    
)

-- DROP TABLE IF EXISTS orders;
-- CREATE TABLE orders (
--   user_id INTEGER,
--   FOREIGN KEY(user_id) REFERENCES site_user(user_id),
--   product_id INTEGER,
--   FOREIGN KEY(product_id) REFERENCES products(product_id),
--   quantity INTEGER
-- );

-- INSERT INTO orders (user_id,product_id,quantity)
-- VALUES(
--   1,
--   2,
--   1
-- );

DROP TABLE IF EXISTS cart_item;
CREATE TABLE cart_item (
  cart_item_id SERIAL PRIMARY KEY,
  product_id INTEGER,
  user_id INTEGER,
  quantity INTEGER,
  FOREIGN KEY(user_id) REFERENCES site_user(user_id),
  FOREIGN KEY(product_id) REFERENCES products(product_id)
);

INSERT INTO cart_item (product_id,user_id,quantity)
VALUES(
    1,
    1,
    2
)

-- for testing --
CREATE TABLE testest (
  id SERIAL PRIMARY KEY,
  info VARCHAR(250)
)

INSERT INTO testest (info)
VALUES('testname')